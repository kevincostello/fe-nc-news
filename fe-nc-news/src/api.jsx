import axios from "axios";

export const getArticles = query => {
  const { sort_by, order, topic } = query;
  console.log(sort_by, order, topic);
  return axios
    .get("https://heroku-my-data.herokuapp.com/api/articles", {
      params: { sort_by, order, topic }
    })
    .then(response => {
      console.log("in here", response.data.articles);
      return response.data.articles;
    });
};

export const sortBy = (event, sortFlag, topic) => {
  console.log("sorted", event.target.name);
  let query = { topic };
  if (sortFlag === false) {
    query.sort_by = event.target.name;
    query.order = "asc";
  } else {
    query.sort_by = event.target.name;
    query.order = "desc";
  }
  return query;
};

export const clicker = event => {
  console.log("event is:", event.target.name);
  // event.preventDefault();
  return event.target.name;
};
