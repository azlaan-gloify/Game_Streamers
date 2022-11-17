import styled from "styled-components";

const Container = styled.div`
  display: flex;
  background-color: white;
  border-radius: 2px;
  border-bottom: 0.5px solid #ccc;
  padding-inline: 1%;
`;

const Child1 = styled.div`
  @media only screen and (min-width: 600px) {
    flex: 0.5;
  }
  @media only screen and (max-width: 600px) {
    flex: 1;
  }
  @media only screen and (max-width: 300px) {
    flex: 1;
  }
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InnerChild1 = styled.div`
  background-color: ${(props) =>
    props.variant === 1
      ? "#FF3131"
      : props.variant === 2
      ? "#FFBF00"
      : props.variant === 3
      ? "#FFD400"
      : "#89CFF0"};
  width: 40%;
  height: 50%;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InnerChild = styled.div`
  background-color: #eee;
  width: 40%;
  height: 50%;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Child2 = styled.section`
  @media only screen and (min-width: 600px) {
    flex: 0.5;
  }
  @media only screen and (max-width: 600px) {
    flex: 1;
  }
  @media only screen and (max-width: 300px) {
    flex: 1;
  }
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Child3 = styled.section`
  @media only screen and (min-width: 600px) {
    flex: 7;
  }
  @media only screen and (max-width: 600px) {
    flex: 3;
  }
  @media only screen and (max-width: 300px) {
    flex: 2;
  }
  display: flex;
  padding-inline: 1%;
  justify-content: flex-start;
  align-items: center;
`;

const Child4 = styled.section`
  @media only screen and (min-width: 600px) {
    flex: 2;
  }
  @media only screen and (max-width: 600px) {
    flex: 2;
  }
  @media only screen and (max-width: 300px) {
    flex: 2;
  }
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IndexTxt = styled.h3`
  font-size: 0.8em;
  letter-spacing: 1px;
  font-weight: 500;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: black;
`;

const NameTxt = styled.h4`
  font-size: 0.8em;
  letter-spacing: 1px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: 600;
  color: black;
`;

const ScoreTxt = styled.h4`
  font-size: 0.7em;
  letter-spacing: 1px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: maroon;
  transition-property: all 0.1s;
`;

export {
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
};
