import { Component } from "react";
import HOCComponent from "./HOCComponent";
class MyComponent extends Component {
  render() {
    const { count, setCount } = this.props;
    return (
      <div>
        <button onClick={setCount}>Clicked {count} times</button>
      </div>
    );
  }
}
export default HOCComponent(MyComponent);
