import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
    console.log("constructor");
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(users);
          }
        )
      );
  }

  toChange = (event) => {
    let stringToSearch = event.target.value.toLowerCase();
    this.setState(() => {
      return {
        searchField: stringToSearch,
      };
    });
  };

  render() {
    console.log("render");
    const { toChange } = this;
    const { monsters, searchField } = this.state;
    let stringToSearch = searchField;
    const filteredArray = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(stringToSearch);
    });

    return (
      <div className="App">
        <input
          type="search"
          name=""
          id=""
          placeholder="search monsters"
          onChange={toChange}
        />
        {filteredArray.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
