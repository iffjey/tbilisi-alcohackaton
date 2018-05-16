import React, { Component } from 'react';
import styled from 'react-emotion';

import logo from './assets/logo.png';

const FirstLayout = styled('div') `
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: aquamarine;
  padding: 50px 25px 0 25px;
  text-align: center;
`;

const Title = styled('h1') `
  color: #6C2D58;
  font-size: 48px;
  margin: 30px 0 0 0;
`;

const Subtitle = styled('h2') `
  color: #b2577A;
  font-size: 18px;
  margin: 5px 0 0 0;
`;

const MartiansContainer = styled('div') `
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 175px;
  width: 400px;
  border-radius: 10px;
  background-color: white;
  margin: 0 auto;
  padding: 10px 20px;
  margin-top: 30px;
  box-shadow: 3px 4px 10px #888888;
`;

const Description = styled('span') `

`;

class App extends Component {
  render() {
    return (
      <div className="app">
        <FirstLayout>
          <Title>Welcome to demo-app for Offliner & Blood Contracts</Title>
          <Subtitle>*part of Tbilisian hackaton</Subtitle>
          <MartiansContainer>
            <Description>{`
              We're Evil Martians and we love open-source,
              this demo should demonstrate possibilities of two our projects.
            `}</Description>
            <a href="https://evilmartians.com">
              <img src={logo} width="150px" alt="Evil Martians logo"></img>
            </a>
          </MartiansContainer>
        </FirstLayout>
      </div>
    );
  }
}

export default App;
