import { handleReponse } from "./ErrorHandler";

export const isLocalhost = Boolean(
  window.location.hostname === "localhost" ||
    window.location.hostname === "[::1]" ||
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

export const baseApi = isLocalhost
  ? "http://localhost:3002/api"
  : `${window.location.origin}/api`;

export default class BaseModel {
  constructor(api) {
    this.baseApi = baseApi;
    this.currentUserToken = (
      JSON.parse(localStorage.getItem("currentUser")) || {}
    ).token;
    this.api = api;
  }

  find = id => {
    return fetch(`${baseApi}/${this.api}/${id}`).then(handleReponse);
  };

  create = data => {
    this.currentUserToken = (
      JSON.parse(localStorage.getItem("currentUser")) || {}
    ).token;
    return fetch(`${baseApi}/${this.api}`, {
      method: "post",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": this.currentUserToken
      },
      body: JSON.stringify(data)
    }).then(handleReponse);
  };

  delete = id => {
    this.currentUserToken = (
      JSON.parse(localStorage.getItem("currentUser")) || {}
    ).token;
    return fetch(`${baseApi}/${this.api}/${id}`, {
      method: "delete",
      headers: {
        "x-access-token": this.currentUserToken
      }
    }).then(handleReponse);
  };

  update = (id, data) => {
    this.currentUserToken = (
      JSON.parse(localStorage.getItem("currentUser")) || {}
    ).token;
    return fetch(`${baseApi}/${this.api}/${id}`, {
      method: "put",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": this.currentUserToken
      },
      body: JSON.stringify(data)
    }).then(handleReponse);
  };
}
