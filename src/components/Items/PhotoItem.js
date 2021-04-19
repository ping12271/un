import React from "react";
import styled from "styled-components";
import {IconDownload, IconHeart, IconPlus} from "../../icons";

const PhotoItem = (props) => {

    const {
        urls,
        user,
        users,
        sponsorship
    } = props;
    return (
        <Container className={'PhotoItem'}>
            <Thumb>
                <img src={urls.regular} alt=""/>
            </Thumb>
            <Desc>
                <Info>
                    <Buttons>
                        <Button>
                            <IconHeart/>
                        </Button>
                        <Button>
                            <IconPlus/>
                        </Button>
                    </Buttons>
                </Info>
                <Info>
                    <Profile>
                        <Avatar>
                            <a href={user?.portfolio_url}>
                                <img src={user?.profile_image.medium} alt=""/>
                            </a>
                        </Avatar>
                        <About>
                            <h3><a href="#">{user?.name}</a></h3>
                            <h4><a href="#">{sponsorship?.tagline}</a></h4>
                        </About>
                    </Profile>
                    <Buttons>
                        <Button>
                            <IconDownload/>
                        </Button>
                    </Buttons>
                </Info>
            </Desc>
        </Container>
    )
}

const Container = styled.div`
  position: relative;

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
`;

const Thumb = styled.div`

`;

const Desc = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  padding: 18px 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: linear-gradient(180deg, rgba(0, 0, 0, .34) 0, rgba(0, 0, 0, .338) 3.5%, rgba(0, 0, 0, .324) 7%, rgba(0, 0, 0, .306) 10.35%, rgba(0, 0, 0, .285) 13.85%, rgba(0, 0, 0, .262) 17.35%, rgba(0, 0, 0, .237) 20.85%, rgba(0, 0, 0, .213) 24.35%, rgba(0, 0, 0, .188) 27.85%, rgba(0, 0, 0, .165) 31.35%, rgba(0, 0, 0, .144) 34.85%, rgba(0, 0, 0, .126) 38.35%, rgba(0, 0, 0, .112) 41.85%, rgba(0, 0, 0, .103) 45.35%, rgba(0, 0, 0, .1) 48.85%, rgba(0, 0, 0, .103) 52.35%, rgba(0, 0, 0, .112) 55.85%, rgba(0, 0, 0, .126) 59.35%, rgba(0, 0, 0, .144) 62.85%, rgba(0, 0, 0, .165) 66.35%, rgba(0, 0, 0, .188) 69.85%, rgba(0, 0, 0, .213) 73.35%, rgba(0, 0, 0, .237) 76.85%, rgba(0, 0, 0, .262) 80.35%, rgba(0, 0, 0, .285) 83.85%, rgba(0, 0, 0, .306) 87.35%, rgba(0, 0, 0, .324) 90.85%, rgba(0, 0, 0, .338) 94.35%, rgba(0, 0, 0, .347) 97.85%, rgba(0, 0, 0, .35));
  display: none;
  
  .PhotoItem:hover & {
    display: flex;
  }
  
  a {
    color: #fff;
    opacity: .7;
    transition: 0.4s;

    &:hover {
      opacity: 0.9;
    }
  }
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Buttons = styled.div`
  display: flex;
  > * {
    margin-right: 8px;
    
    &:last-child {
      margin-right: 0;
    }
  }
`;

const Button = styled.div`
  width: 40px;
  height: 32px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255,255,255, 0.9);
  cursor: pointer;
    svg {
      width: 16px;
    }
`;

const Profile = styled.div`
  display: flex;
`;

const Avatar = styled.div`
  margin-right: 8px;
  
  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
  
  a {
    opacity: 1;
  }

`;

const About = styled.div`
  h3 {
    font-size: 15px;
  }
  h4 {
    font-size: 11px;
  }
`;

export default PhotoItem;