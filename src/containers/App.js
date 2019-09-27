import React, { Component } from "react";
import { connect } from "react-redux";
import styled, { createGlobalStyle } from "styled-components";

import Characters from "../components/characters/characters";
import { loadCharacterData } from "../store/action";

import background from "../images/space.png";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: black;
    background: url(${props => props.image});
    font-family: 'Open Sans', sans-serif;
    color: white;
  }

  h1{
    color: yellow;
    font-family: 'Poller One', cursive;
    margin-top: 10px;
    text-align: center;
    font-size: 1.8em;
  }
`;

const AppContainer = styled.div`
  background: rgba(0, 0, 0, 0.8);
  width: 80%;
  padding: 0;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const FormContainer = styled.form`
  width: 100%;
  text-align: center;

  input {
    margin-left: 5px;
  }

  label {
    margin: 0 5px 0 5px;
  }

  button {
    margin-left: 5px;
  }
`;

class App extends Component {
  state = {
    page: 1,
    name: "",
    minHeight: "",
    gender: "All"
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

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  render() {
    const { name, minHeight, gender } = this.state;
    const { isBlocked } = this.props;

    return (
      <AppContainer className="App">
        <GlobalStyle image={background} />
        <h1>STAR WARS CHARACTER WIKI</h1>
        <FormContainer>
          <input
            value={name}
            onChange={this.handleInputChange}
            name="name"
            type="text"
            placeholder="name"
          ></input>
          <input
            onChange={this.handleInputChange}
            value={minHeight}
            name="minHeight"
            type="number"
            placeholder="height above"
          ></input>
          <label>Gender: </label>
          <select
            onChange={this.handleInputChange}
            value={gender}
            name="gender"
          >
            <option value="ll">All</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </FormContainer>
        <Characters
          filters={{ name: name, minHeight: minHeight, gender: gender }}
        />
        <button
          disabled={!isBlocked}
          onClick={() => this.loadPage(this.state.page + 1)}
        >
          LoadMore
        </button>
      </AppContainer>
    );
  }
}

const mapStateToProps = ({ isBlocked }) => {
  return {
    isBlocked: isBlocked
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
