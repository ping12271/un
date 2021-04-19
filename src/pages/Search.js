import React from "react";
import styled from "styled-components";
import SearchContainer from "../containers/SearchContainer";
import {ContentContainer} from "../components/Layout/Layout.Styled";

const Search = (props) => {

  return (
    <Container>
        <ContentContainer>
            <SearchContainer {...props}/>
        </ContentContainer>
    </Container>
  )
}

const Container = styled.div`

`;

export default Search;