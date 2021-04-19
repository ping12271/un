import axios from "axios";

const axiosInstance = axios.create({
    baseURl : 'https://api.unsplash.com'
})

const request = (method, url, data) => {
    try {
        const config = {
            method,
            url,
            params: data
        }
        
        return axios(config)
    } catch (e) {
        console.log('@@', e)
    }
    
}

const Api = {
    getPhotos: (data) => request('get', '/photos', data),
    searchPhotos: (data) => request('get', '/search', data),
    getTopics: (data) => request('get', '/topics', data),
    getTopicBySlug: (slug, data) => request('get', `topics/${slug}`, data),
}

export default Api;