import React from "react";
import styled, {createGlobalStyle} from "styled-components";
import {Route, Switch} from 'react-router-dom';
import Home from "./pages/Home";
import HeaderContainer from "./containers/HeaderContainer";
import Search from "./pages/Search";
import Topics from "./pages/Topics";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
  }
  img {
    vertical-align: top;
  }
`;

const App = () => {

  return (
    <Container>
        <GlobalStyle/>
        <HeaderContainer/>
        <Switch>
            <Route exact path={'/'} component={Home}/>
            <Route path={'/search/:category/:query'} component={Search}/>
            <Route path={'/topics/:slug'} component={Topics}/>
        </Switch>
    </Container>
  )
}

const Container = styled.div`

`;

export default App;
