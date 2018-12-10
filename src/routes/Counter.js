import React, { Component } from "react";
import { observer } from "mobx-react";
import { Button } from "../components/design";
import { Container, Heading, Actions } from "../styles/Counter";
import CounterModel from "../models/CounterModel";

const counter = new CounterModel();

class Counter extends Component {
  render() {
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

export default observer(Counter);
