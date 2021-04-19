import React from "react";
import styled from "styled-components";
import SearchBox from "../SearchBox";

const Visual = ({history}) => {

  return (
    <Container>
        <Bg>
            <img src='https://images.unsplash.com/photo-1615057638606-a678f5f27bda?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMTZ8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60' alt=""/>
        </Bg>
        <Contents>
            <h1>Unsplash</h1>
            <p>The internet’s source of freely-usable images.<br/>
                Powered by creators everywhere.
            </p>
            <SearchBox shape={'square'} history={history}/>
        </Contents>
    </Container>
  )
}


const Container = styled.div`
  position: relative;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Bg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Contents = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;
  color: #fff;
  h1 {
    font-size: 60px;
    font-weight: bold;
  }
  p {
    font-size: 20px;
    margin-bottom: 20px;
  }
`;

export default Visual;