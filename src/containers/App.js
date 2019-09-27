import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.css";
import Characters from "../components/characters/characters";
import { loadCharacterData } from "../store/action";

class App extends Component {
  state = {
    page: 1
  };

  componentDidMount() {
    const { page } = this.state;
    const { loadCharacters } = this.props;

    loadCharacters(page);
  }

  loadPage = pageToLoad => {
    const { loadCharacters } = this.props;

    loadCharacters(pageToLoad);
    this.setState({
      page: pageToLoad
    });
  };

  render() {
    const { page } = this.state;
    const { isBlocked, isLoading } = this.props;

    return (
      <div className="App">
        <h1>STAR WARS CHARACTER WIKI</h1>
        <Characters />
        <button
          disabled={page === 1 || isLoading}
          onClick={() => this.loadPage(this.state.page - 1)}
        >
          Previous
        </button>
        {page}
        <button
          disabled={!isBlocked || isLoading}
          onClick={() => this.loadPage(this.state.page + 1)}
        >
          Next
        </button>
      </div>
    );
  }
}

const mapStateToProps = ({ isBlocked, isLoading }) => {
  return {
    isBlocked: isBlocked,
    isLoading: isLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadCharacters: page => dispatch(loadCharacterData(page))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
