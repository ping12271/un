import React, {useEffect, useState} from "react";
import styled from "styled-components";
import MainPhotoList from "../components/List/MainPhotoList";
import Api from "../api";
import {useDispatch, useSelector} from "react-redux";
import {Action} from "../redux/reducer";

const MainPhotoListContainer = () => {

    const dispatch = useDispatch();
    const state = useSelector(state => state);

    useEffect(() => {
        getPhotos();
    }, [])

    const getPhotos = async () => {
       const result = await Api.getPhotos({
            client_id: 'T-i2T-wrTHuwVSqRwSLLYOYILuVkomGurTC6bH9Xpmc',
            page: 2,
            per_page: 15,
            order_by: 'popular'
        });

        dispatch(Action.Creators.setPhotos(result.data))
    }

    return (
        <Container>
            <MainPhotoList data={state.list}/>
        </Container>
    )
}

const Container = styled.div`

`;

export default MainPhotoListContainer;