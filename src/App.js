import React from "react";
import styled, {createGlobalStyle} from "styled-components";
import {Route, Switch} from 'react-router-dom';
import Home from "./pages/Home";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
  }
`;

const App = () => {

  return (
    <Container>
        <GlobalStyle/>
        <Switch>
            <Route exact path={'/'} component={Home}/>
        </Switch>
    </Container>
  )
}

const Container = styled.div`

`;

export default App;
