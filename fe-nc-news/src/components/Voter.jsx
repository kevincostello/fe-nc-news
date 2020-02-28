import React, { Component } from "react";
import * as api from "../api";

export class Voter extends Component {
  state = {
    article_id: 0,
    votes: 0,
    inc_votes: 0
  };
  render() {
    console.log("Please tell me there are some props: ", this.props);
    return (
      <>
        <button onClick={this.clicker} value={1}>
          ⬆ Vote for me please!
        </button>
        <button onClick={this.clicker} value={-1}>
          ⬇ I am unhappy now :(
        </button>
      </>
    );
  }

  clicker = event => {
    const { value } = event.target;
    this.setState(currentState => {
      console.log("Vote difference", currentState.inc_votes + Number(value));
      api.patchArticle(
        currentState.inc_votes + Number(value),
        this.props.article_id
      );
      return { inc_votes: currentState.inc_votes + Number(value) };
    });
  };
}

export default Voter;
