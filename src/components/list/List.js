import React from "react";
import {
  Container,
  InnerChild1,
  InnerChild,
  Child1,
  Child2,
  Child3,
  Child4,
  IndexTxt,
  NameTxt,
  ScoreTxt,
} from './List.Style'

const List = (props) => {
  let { position, pic, name, score } = props;

  return (
    <Container variant={position + 1}>
      <Child1>
        <InnerChild1 variant={position + 1}>
          <IndexTxt>{position + 1}</IndexTxt>
        </InnerChild1>
      </Child1>

      <Child2>
        <InnerChild>{pic}</InnerChild>
      </Child2>

      <Child3>
        <NameTxt>{name}</NameTxt>
      </Child3>

      <Child4>
        <ScoreTxt>{score} Pts</ScoreTxt>
      </Child4>
    </Container>
  );
};

export default List;
