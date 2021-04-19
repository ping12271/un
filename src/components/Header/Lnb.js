import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const Lnb = ({topics}) => {

  return (
    <Container>
      <Track>
        {
            topics.map((item, index) => {
                return (
                    <TopicMenu>
                        <Link to={`/topics/${item.slug}`}>
                            {item.title}
                        </Link>
                    </TopicMenu>
                )
            })
        }
      </Track>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
`;

const Track = styled.div`
  display: flex;
  overflow-x: auto;
  flex: 1;
`;

const TopicMenu = styled.div`
  a {
    display: flex;
    height: 56px;
    align-items: center;
    padding: 0 10px;
    font-size: 14px;
    color: #797979;
    white-space: nowrap;
    &:hover {
      color: #111;
    }
  }
`;



export default Lnb;