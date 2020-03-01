import React from "react";
import ReactDOM from "react-dom";
import CowList from "./cowlist";
import CowDescription from "./cowdescription";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cows: [],
      description: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    fetch("http://127.0.0.1:3001/api/cows", {
      headers: {
        "Content-Type": "applications/json",
        Accept: "application/json"
      }
    })
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

  render() {
    return (
      <div>
        <form>
          <div>
            <label>Cow Name</label>
            <input type="text"></input>
          </div>
          <div>
            <label>Cow Description</label>
            <input type="text"></input>
          </div>
          <submit>
            <button>Add a cow</button>
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
