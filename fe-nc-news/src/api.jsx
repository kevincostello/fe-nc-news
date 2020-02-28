import axios from "axios";
import React from "react";

export const getArticles = query => {
  const { sort_by, order, topic } = query;
  return axios
    .get("https://heroku-my-data.herokuapp.com/api/articles", {
      params: { sort_by, order, topic }
    })
    .then(response => {
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
  console.log("event is:", event.target.value);
  event.preventDefault();
  return event.target.name;
};

export const getComments = article_id => {
  return axios
    .get(
      `https://heroku-my-data.herokuapp.com/api/articles/${article_id}/comments`
    )
    .then(response => {
      console.log("the comments are:", response.data);
      return response.data.comments;
    })
    .catch(err => console.log("the error in comments by article id is: ", err));
};

export const postComment = (query, article_id) => {
  const { username, body } = query;
  const params = { params: { username, body } };
  console.log(
    "query",
    query,
    "body",
    body,
    "username",
    username,
    "params",
    params
  );
  return axios
    .post(
      `https://heroku-my-data.herokuapp.com/api/articles/${article_id}/comments`,
      {
        username,
        body
      }
    )
    .then(response => {
      console.log("the posted comment is: ", response.data.comment);
      return response.data.comment;
    });
};

export const fetchUser = username => {
  return axios.get;
};

export const deleteComment = (comment_id, article_id) => {
  console.log(
    "comment_id is: >>>>>>>>>>>>>>>>",
    comment_id,
    "artciel",
    article_id
  );
  return axios
    .delete(`https://heroku-my-data.herokuapp.com/api/comments/${comment_id}`)
    .then(response => {
      console.log("deleted: ", comment_id);
      return getComments(article_id).then(comments => {
        return { comments };
      });
    })
    .catch(err => {
      console.log("error is:", err);
    });
};

export const patchArticle = (inc_votes, article_id) => {
  console.log("inc_votes", inc_votes, "article_id", article_id);
  return axios
    .patch(`https://heroku-my-data.herokuapp.com/api/articles/${article_id}`, {
      inc_votes
    })
    .then(response => {
      console.log(response.data);
    })
    .catch(err => {
      console.log("error is:", err);
    });
};

export const showUp = clickerFunc => {
  return (
    <button onClick={clickerFunc} value={1}>
      ⬆ Vote for me please!
    </button>
  );
};

export const showDown = clickerFunc => {
  return (
    <button onClick={clickerFunc} value={-1}>
      ⬇ I am unhappy now :)
    </button>
  );
};
