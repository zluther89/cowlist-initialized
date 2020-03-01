import React from "react";
import ReactDOM from "react-dom";
import CowList from "./cowlist";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cows: []
    };
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

  render() {
    return (
      <div>
        <div>Hello World!</div>
        {/* <form>
          <input type="text"></input>
          <submit></submit>
        </form> */}
        <div></div>
        <div>
          test
          <CowList Cows={this.state.cows} />
        </div>
      </div>
    );
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
