import React, { Component } from "react";
import axios from "axios";

class ArticleById extends Component {
  state = {
    article: {
      article_id: 333,
      title: "Seafood substitutions are increasing",
      body:
        "'SEAFOOD fraud is a serious global problem', begins a recent report from Oceana, an NGO. Reviewing over 200 studies in 55 countries, the report finds that one in five fish sold has been mislabelled. Although fish fraud is common early in the supply chain, most of it comes at the retail level. In 65% of cases, the motivation is economic—slippery restaurateurs frequently serve up cheaper fish than they advertise to cut costs. In America, Oceana has reported instances of tilapia being sold as the more expensive red snapper. Especially brazen fish criminals have invented new types of fish entirely. In Brazil, researchers were puzzled to find markets selling 'douradinha', ' non-existent species. Close inspection found that 60% of such fish were actually 'vulture' catfish, a relatively undesirable dish. Reports in America of catfish being substituted for more expensive fish date back to at least 2002; Oceana’s study suggests that the phenomenon is spreading.",
      votes: 0,
      topic: "cooking",
      author: "weegembump",
      created_at: "2018-05-30T15:59:13.341Z",
      comment_count: 6
    }
  };
  render() {
    return (
      <main>
        {Object.keys(this.state.article).map(key => {
          return (
            <h3 key={this.state.article.article_id + Date.now()}>
              {key} : {this.state.article[key]}
            </h3>
          );
        })}
      </main>
    );
  }

  getArticleById = () => {
    console.log("this.props", this.props);
    return axios
      .get(
        `https://heroku-my-data.herokuapp.com/api/articles/${this.props.article_id}`
      )
      .then(response => {
        console.log("repsonse from api is:", response.data.article);
        return response.data.article;
      });
  };

  componentDidMount() {
    return this.getArticleById().then(article => {
      this.setState({ article });
    });
  }
}

export default ArticleById;
