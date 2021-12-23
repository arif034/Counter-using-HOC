import "./styles.css";
import { Component } from "react";
import MyComponent from "./MyComponent.js";
class App extends Component {
  render() {
    return (
      <div className="App">
        <MyComponent />
      </div>
    );
  }
}
export default App;
