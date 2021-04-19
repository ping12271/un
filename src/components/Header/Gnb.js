import React from "react";
import styled from "styled-components";
import {IconLogo} from "../../icons";
import SearchBox from "../SearchBox";
import Nav from "./Nav";

const Gnb = () => {

  return (
    <Container>
        <Logo>
            <IconLogo/>
        </Logo>
        <SearchBox shape={'round'}/>
        <Nav/>
    </Container>
  )
}

const Container = styled.header`
  display: flex;
  padding: 0 20px;
  height: 62px;
  align-items: center;
`;

const Logo = styled.div`
  margin-right: 20px;
`;



export default Gnb;