import React, { Component } from "react";
import { observer } from "mobx-react";
import { List, Input, Button } from "antd";

import Item from "../models/ItemModel";
import { handleErrors } from "../models/ErrorHandler";
import { Container } from "../styles/Common";
import { TextHeading, GrayText } from "../styles/Home";

const Search = Input.Search;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { newItem: "", editItemId: null, editItemText: "" };
    Item.getAll();
  }

  createItem = () => {
    if (this.state.newItem === "") return;
    Item.create({ title: this.state.newItem })
      .then(() => {
        Item.getAll();
        this.setState({ newItem: "" });
      })
      .catch(handleErrors);
  };

  updateItem = () => {
    if (this.state.editItemText === "") return;
    Item.update(this.state.editItemId, { title: this.state.editItemText })
      .then(() => {
        Item.getAll();
        this.setState({ editItemText: "", editItemId: null });
      })
      .catch(handleErrors);
  };

  render() {
    if (Item.isLoading) return <div>Loading...</div>;
    return (
      <Container>
        <List
          header={
            <React.Fragment>
              <TextHeading>Items</TextHeading>
              <Search
                size="large"
                placeholder="Enter new item title"
                value={this.state.newItem}
                onChange={e => this.setState({ newItem: e.target.value })}
                onSearch={this.createItem}
                enterButton="Add"
              />
            </React.Fragment>
          }
          bordered
          dataSource={Item.all}
          renderItem={item => (
            <List.Item
              actions={[
                <Button
                  shape="circle"
                  icon="edit"
                  onClick={() => {
                    this.setState({
                      editItemId: item._id,
                      editItemText: item.title
                    });
                  }}
                />,
                <Button
                  type="danger"
                  shape="circle"
                  icon="delete"
                  onClick={() => {
                    Item.delete(item._id).then(() => {
                      Item.getAll();
                    });
                  }}
                />
              ]}
            >
              <List.Item.Meta
                title={
                  this.state.editItemId === item._id ? (
                    <Search
                      value={this.state.editItemText}
                      onChange={e =>
                        this.setState({ editItemText: e.target.value })
                      }
                      onSearch={this.updateItem}
                      enterButton="Save"
                    />
                  ) : (
                    <div>
                      {item.title} <GrayText>- By {item.user.name}</GrayText>
                    </div>
                  )
                }
                description={
                  new Date(item.created_at).toLocaleDateString() +
                  " " +
                  new Date(item.created_at).toLocaleTimeString()
                }
              />
            </List.Item>
          )}
        />
      </Container>
    );
  }
}

export default observer(Home);
