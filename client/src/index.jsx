import React from "react";
import ReactDOM from "react-dom";
import CowList from "./cowlist";
import CowDescription from "./cowdescription";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cows: [],
      description: null,
      nameSubmit: null,
      descriptionSubmit: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    fetch("http://127.0.0.1:3001/api/cows")
      .then(response => {
        return response.json();
      })
      .then(result => {
        result = result.slice(0);
        this.setState({
          cows: result
        });
        console.log(this.state.cows);
      })
      .catch(err => console.log(err));
  }

  handleClick(cow) {
    console.log("click");
    this.setState({
      description: cow.description
    });
    console.log(this.state);
  }

  //add to state, submit name and submit description, functions that update the states submit name and description on change
  //add a function that submits a post to the server with the states submitName and submitdescription when clicked

  handleNameChange(event) {
    this.setState({
      nameSubmit: event.target.value
    });
  }

  handleDescriptionChange(event) {
    console.log(event.target.value);
    this.setState({
      descriptionSubmit: event.target.value
    });
    console.log(this.state.descriptionSubmit);
  }

  handleSubmit() {
    fetch("http://127.0.0.1:3001/api/cows", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: this.state.nameSubmit,
        description: this.state.descriptionSubmit
      })
    });
  }

  render() {
    return (
      <div>
        <form>
          <div>
            <label>Cow Name</label>
            <input
              type="text"
              onChange={event => {
                this.handleNameChange(event);
              }}
            ></input>
          </div>
          <div>
            <label>Cow Description</label>
            <input
              type="text"
              onChange={event => this.handleDescriptionChange(event)}
            ></input>
          </div>
          <submit>
            <button onClick={() => this.handleSubmit()}>Add a cow</button>
          </submit>
        </form>
        <div>
          <div>
            <h4>Cow Description</h4>
          </div>
          <CowDescription Description={this.state.description} />
        </div>
        <div>
          <div>
            <h1>Cow Names</h1>
          </div>
          <CowList Cows={this.state.cows} Handler={this.handleClick} />
        </div>
      </div>
    );
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
