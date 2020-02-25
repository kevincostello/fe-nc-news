import axios from "axios";

export const getArticles = query => {
  const { sort_by, order } = query;
  console.log(sort_by, order);
  return axios
    .get("https://heroku-my-data.herokuapp.com/api/articles", {
      params: { sort_by, order }
    })
    .then(response => {
      console.log("in here", response.data.articles);
      return response.data.articles;
    });
};
