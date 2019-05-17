import BaseModel from "./BaseModel";
import { extendObservable } from "mobx";

class ItemModel extends BaseModel {
  constructor() {
    super("items");
    extendObservable(this, {
      all: [],
      isLoading: true
    });
  }

  getAll = () => {
    return fetch(`${this.baseApi}/${this.api}`)
      .then(data => data.json())
      .then(res => {
        this.all = res.data.map(e => {
          e.key = e._id;
          return e;
        });
        this.isLoading = false;
      });
  };
}

const item = new ItemModel();

export default item;
