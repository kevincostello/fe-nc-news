import React, { Component } from "react";
import * as api from "../api";

export class Voter extends Component {
  state = {
    votedif: 0,
    disabled: false
  };
  render() {
    console.log("Please tell me there are some props: ", this.props);
    return (
      !this.state.disabled && (
        <>
          <button
            onClick={this.clicker}
            value={1}
            disabled={this.state.disabled}
          >
            ⬆ Vote for me please!
          </button>
          <h3>Votes: {this.props.votes + this.state.votedif}</h3>
          <button
            onClick={this.clicker}
            value={-1}
            disabled={this.state.disabled}
          >
            ⬇ I am unhappy now :
          </button>
        </>
      )
    );
  }

  clicker = event => {
    const { value } = event.target;
    event.preventDefault();
    console.log("Vlaue: ", Number(value));
    api.patchArticle(Number(value), this.props.article_id).then(
      this.setState({
        // console.log("Vote difference", currentState.inc_votes + Number(value));

        votedif: Number(value),
        disabled: true
      })
    );
  };
}

export default Voter;
