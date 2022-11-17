import React, { useState, useEffect, createRef } from "react";
import "./App.css";
import Data from "./db/Data";
import List from "./components/list/List";
import styled from "styled-components";
import useFlipper from "./hooks/useFlipper.ts";

const SuperContainer = styled.div`
  background-color: #ccc;
  padding: 2%;
  margin: 1%;
  border-radius: 1%;
`;

const App = () => {
  const [sortData, setSortedData] = useState(Data);
  const [indexSelect, setIndexSelect] = useState();

  let listRef = createRef();

   useFlipper(listRef);

  const sortFunction = () => {
    const sorting = Data.sort((item1, item2) => {
      return item2.score - item1.score;
    });

    setSortedData(sorting);
  };

  useEffect(() => {
    sortFunction(Data);

    const timer = setInterval(() => {
      const ind = Math.floor(Math.random() * 10);
      setIndexSelect(ind);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (Data.length && indexSelect !== undefined) {
      Data[indexSelect].score = Math.floor(
        Math.random() * Data[indexSelect].score * 3
      );
    }

    sortFunction();
  }, [indexSelect]);

  return (
    <SuperContainer ref={listRef}>
      {sortData?.map((item, index) => {
        return (
          <List
            key={index + 1}
            position={index}
            pic={item.picture}
            name={item.displayName}
            score={item.score}
          />
        );
      })}
    </SuperContainer>
  );
};

export default App;
