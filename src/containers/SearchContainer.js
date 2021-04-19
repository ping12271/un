import React, {useEffect} from "react";
import styled from "styled-components";
import Api from "../api";
import MainPhotoList from "../components/List/MainPhotoList";
import {useDispatch, useSelector} from "react-redux";
import {Action} from "../redux/reducer";

const SearchContainer = ({location, match, history}) => {

    const query = match.params.query;
    const dispatch = useDispatch();
    const state = useSelector(state => state);

    useEffect(() => {
        searchPhotos()
    }, [])

    const searchPhotos = async () => {
        const result = await Api.searchPhotos({
            client_id: 'T-i2T-wrTHuwVSqRwSLLYOYILuVkomGurTC6bH9Xpmc',
            query
        })
        dispatch(Action.Creators.setSearchResults(result.data))
    }

    return (
        <Container>
            <MainPhotoList data={state.searchResults.photos?.results}/>
        </Container>
    )
}

const Container = styled.div`

`;

export default SearchContainer;