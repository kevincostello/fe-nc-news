import React, { Component } from "react";
import * as api from "../api";

export class Voter extends Component {
  state = {
    votedif: 0,
    inc_votes: 0,
    username: ""
  };
  render() {
    console.log("props in voter: ", this.props.func);
    return this.state.inc_votes === 0 ? (
      <>
        {api.showUp(this.clicker)}
        <h3>Votes: {this.props.votes + this.state.inc_votes}</h3>
        {api.showDown(this.clicker)}
      </>
    ) : this.state.inc_votes === 1 ? (
      <>
        <h3>Votes: {this.props.votes + this.state.inc_votes}</h3>
        {api.showDown(this.clicker)}
      </>
    ) : (
      this.state.inc_votes === -1 && (
        <>
          <h3>Votes: {this.props.votes + this.state.inc_votes}</h3>
          {api.showUp(this.clicker)}
        </>
      )
    );
  }

  clicker = event => {
    const { value } = event.target;
    event.preventDefault();
    this.setState(currentState => {
      return {
        votedif: Number(value),
        inc_votes: currentState.inc_votes + Number(value),
        username: this.props.username
      };
    });

    this.props.func(Number(value), this.props.idVote).then(result => {
      console.log("successfully patched!", result);
    });
  };
}

export default Voter;
