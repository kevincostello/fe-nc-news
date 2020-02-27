import React, { Component } from "react";
import CommentList from "./CommentList";

export class Comments extends Component {
  state = {
    comments: []
  };
  render() {
    console.log("rendering: comments");
    return (
      <div>
        <ul className="flex-container">
          <CommentList comments={this.state.comments} />
        </ul>
      </div>
    );
  }

  componentDidMount() {
    console.log("mounting");
    this.setState({
      comments: [
        {
          comment_id: 115,
          author: "happyamy2016",
          article_id: 33,
          votes: 12,
          created_at: "2018-01-19T14:47:14.514Z",
          body:
            "Neque dolor sint illum id consequuntur debitis qui nam eum. Nam adipisci similique consequatur officiis. Totam qui enim at iste dolorem ullam. Tenetur laudantium sed facilis aspernatur occaecati. Provident rerum quia consectetur et. Molestiae eligendi commodi."
        },
        {
          comment_id: 272,
          author: "tickle122",
          article_id: 33,
          votes: 17,
          created_at: "2017-09-26T21:34:42.072Z",
          body:
            "Distinctio excepturi laboriosam eos aperiam quis amet eum animi minima. Officiis in quia. Est consequatur optio atque nostrum iusto impedit harum quod asperiores."
        }
      ]
    });
    // return api.getArticles({}).then(articles => {
    //   this.setState({ articles });
    // });
  }
}

export default Comments;
