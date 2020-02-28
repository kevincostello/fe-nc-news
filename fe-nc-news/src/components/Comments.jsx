import React, { Component } from "react";
import CommentList from "./CommentList";
import * as api from "../api";
import axios from "axios";

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
    console.log("mounting", this.props.article_id);
    const { article_id } = this.props;
    return api.getComments(article_id).then(comments => {
      this.setState({ comments });
    });
  }

  componentDidUpdate(props, prevProps, prevState) {
    console.log("updating", "props:", this.props, "prevProps:", prevProps);
    // const { article_id } = this.props;
    // return api.getComments(article_id).then(comments => {
    //   this.setState({ comments });
    // });
  }
}

export default Comments;
