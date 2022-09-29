import axios from "axios";

const baseUrl = "https://sizens-nc-news-app.herokuapp.com/api"

export const getTopics = () => {
    return axios
    .get(`${baseUrl}/topics`)
    .then(({data : {topics}}) => {
        return topics;
    })
}

export const getArticles = (params) => {
        return axios
        .get(`${baseUrl}/articles`, {params : params})
        .then(({data : {articles}}) => {
            return articles;
        })
}

export const getArticleById = (id) => {
    return axios
    .get(`${baseUrl}/articles/${id}`, {params : id})
    .then(({data : {article}}) => {
        return article;
    })
}

export const updateVotes = (id, voteChange) => {
    return axios
    .patch(`${baseUrl}/articles/${id}`, voteChange)
    .then((res) => {
        return res})
    .catch((err) => console.log(err))
}

export const getCommentsByArticleId = (id) => {
    return axios
    .get(`${baseUrl}/articles/${id}/comments`, {params : id})
    .then(({data : {comments}}) => {
        return comments
    })
}

export const postComment = (id, commentToAdd) => {
    return axios
    .post(`${baseUrl}/articles/${id}/comments`, commentToAdd)
    .then((res) => {
        return res
    })
    .catch((err) => console.log(err))
}

export const updateVotesOnComment = (comment_id, voteChangeOnComment) => {
    return axios
    .patch(`${baseUrl}/comments/${comment_id}`, voteChangeOnComment)
    .then((res) => {
        return res})
    .catch((err) => console.log(err))
}

export const deleteComment = (comment_id) => {
    return axios
    .delete(`${baseUrl}/comments/${comment_id}`)
    .then((res) => {
        return res
    })
    .catch((err) => console.log(err))
}

// export const getArticles = (topic) => {
//     if(!topic){
//         return axios
//         .get(`${baseUrl}/articles`)
//         .then(({data : {articles}}) => {
//             return articles
//         })
//     } else {
//         return axios
//         .get(`${baseUrl}/articles?topic=${topic}`, {params : topic})
//         .then(({data : {articles}}) => {
//             return articles;
//         })
//     }
// }