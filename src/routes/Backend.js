import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

const query = gql`
  {
    allClients {
      id
      name
    }
  }
`;

class Backend extends Component {
  render() {
    let { loading, error, data } = this.props;
    if (loading || !data.allClients) return <p>Loading...</p>;
    if (error) return <p>Error :{error}</p>;

    return data.allClients.map(currentClient => (
      <ol>
        <li>{`${currentClient.name}`}</li>
      </ol>
    ));
  }
}

export default graphql(query)(Backend);
