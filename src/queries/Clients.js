import gql from "graphql-tag";

export const getAllClients = gql`
  {
    allClients {
      id
      name
    }
  }
`;
