import React, { Component } from "react";
import { observable } from "mobx";
import { observer } from "mobx-react";

@observer
class StateComponent extends Component {
  @observable count;

  constructor(props) {
    super(props);
    this.count = 0;
  }

  onClickIncrement = () => {
    this.count += 1;
  };

  onClickDecrement = () => {
    this.count -= 1;
  };

  render() {
    return (
      <div>
        <p>Counter</p>
        <div>
          <button onClick={this.onClickIncrement}>+</button>
          <button onClick={this.onClickDecrement}>-</button>
        </div>
        <p>Count: {this.count}</p>
      </div>
    );
  }
}

export default StateComponent;
