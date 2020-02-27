import React, { Component } from "react";

export class Voter extends Component {
  class = {
    article_id: 0,
    votes: 0,
    votesDifference: 0
  };
  render() {
    console.log(this.props);
    return <div></div>;
  }
}

export default Voter;
