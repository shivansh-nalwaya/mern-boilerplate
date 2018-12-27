import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getAllClients } from "../queries/Clients";

class Backend extends Component {
  render() {
    let { loading, error, data } = this.props;
    if (loading) return <p>Loading...</p>;
    else if (error) return <p>Error :{error}</p>;
    else if (!data.allClients) return <p>Fetching...</p>;

    return (
      <ol>
        {data.allClients.map(currentClient => (
          <li>{currentClient.name}</li>
        ))}
      </ol>
    );
  }
}

export default graphql(getAllClients)(Backend);
