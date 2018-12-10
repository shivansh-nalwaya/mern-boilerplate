import React, { Component } from "react";
import { observer } from "mobx-react";
import { Button } from "./components/design";
import { Container, Heading, Actions } from "./styles/App";

class App extends Component {
  render() {
    const { counter } = this.props;
    return (
      <Container>
        <Heading>Counter : {counter.count}</Heading>
        <Actions>
          <Button onClick={() => counter.increment()} shape="circle">
            +
          </Button>
        </Actions>
        <Actions>
          <Button onClick={() => counter.decrement()} shape="circle">
            -
          </Button>
        </Actions>
      </Container>
    );
  }
}

export default observer(App);
