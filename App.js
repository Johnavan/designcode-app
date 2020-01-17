import React from "react";
import { Text } from "react-native";
import styled from "styled-components";
import { render } from "react-dom";

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <TitleBar>
          <Title>Welcome back,</Title>
          <Name>Johnavan</Name>
        </TitleBar>
      </Container>
    );
  }
}

const Container = styled.View`
  flex: 1;
  background-color: #f0f3f5;
`;

const Title = styled.View`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
`;

const Name = styled.View`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;

const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 20px;
`;
