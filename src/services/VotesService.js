import http from "../pages/http-common";

const getCategory = (id) => {
    return http.get(`category/${id}`);
}
const getType = () => {
    return http.get('type');
}
const category = () => {
    return http.get('category');
}
const getResults = (id) => {
    return http.get(`results/${id}`);
}
const getCategoriesById = (id) => {
    return http.get(`categories/${id}`);
}
const getCatName = (id) => {
    return http.get(`cats/${id}`);
}

const vote = (data) => {
    return http.post('vote', data)
}


export default {
    getCategory,
    getType,
    category,
    getResults,
    getCategoriesById,
    getCatName,
    vote
};