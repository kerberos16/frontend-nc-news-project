import axios from "axios";

const baseUrl = "https://sizens-nc-news-app.herokuapp.com/api"

export const getTopics = () => {
    return axios
    .get(`${baseUrl}/topics`)
    .then(({data : {topics}}) => {
        return topics;
    })
}

export const getArticles = (topic) => {
    if(!topic){
        return axios
        .get(`${baseUrl}/articles`)
        .then(({data : {articles}}) => {
            return articles
        })
    } else {
        return axios
        .get(`${baseUrl}/articles?topic=${topic}`, {params : topic})
        .then(({data : {articles}}) => {
            return articles;
        })
    }
}

export const getArticleById = (id) => {
    return axios
    .get(`${baseUrl}/articles/${id}`, {params : id})
    .then(({data : {article}}) => {
        return article;
    })
}