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
    return axios
    .get(`${baseUrl}/articles?topic=${topic}`, {params : topic})
    .then(({data : {articles}}) => {
        console.log(articles, "in the api")
        return articles;
    })
}