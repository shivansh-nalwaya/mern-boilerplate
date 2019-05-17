import { extendObservable } from "mobx";
import { handleReponse } from "./ErrorHandler";
import { baseApi } from "./BaseModel";

class UserModel {
  constructor() {
    extendObservable(this, {
      currentUser: localStorage.getItem("currentUser")
        ? JSON.parse(localStorage.getItem("currentUser"))
        : null
    });
  }

  login = values => {
    return fetch(`${baseApi}/login`, {
      method: "post",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(values)
    })
      .then(handleReponse)
      .then(res => {
        this.currentUser = res.result;
        localStorage.setItem("currentUser", JSON.stringify(res.result));
      });
  };

  signup = values => {
    return fetch(`${baseApi}/signup`, {
      method: "post",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(values)
    }).then(handleReponse);
  };

  logout = () => {
    return fetch(`${baseApi}/logout`, {
      method: "post",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email: this.currentUser.email })
    })
      .then(handleReponse)
      .then(() => {
        this.currentUser = null;
        localStorage.clear();
      });
  };
}

const user = new UserModel();

export default user;
