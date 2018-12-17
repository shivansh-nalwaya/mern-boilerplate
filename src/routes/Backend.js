import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getAllClients } from "../queries/Clients";

class Backend extends Component {
  render() {
    let { loading, error, data } = this.props;
    if (loading || !data.allClients) return <p>Loading...</p>;
    if (error) return <p>Error :{error}</p>;

    return data.allClients.map(currentClient => (
      <ol>
        <li>{currentClient.name}</li>
      </ol>
    ));
  }
}

export default graphql(getAllClients)(Backend);
