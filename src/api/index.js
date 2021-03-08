import axios from "axios";

const baseUrl = 'https://api.unsplash.com';
const Api = {

    getPhotos: (data) => axios({
        url: baseUrl + '/photos',
        method: 'get',
        params: data
    })
}

export default Api;