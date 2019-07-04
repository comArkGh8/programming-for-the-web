import React, { Component } from 'react';
import Lists from './Lists.js';
import AddList from './AddList.js';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
	lists: [], // this holds the name of each list
	items: {} // this property names of this object are the names of the lists; their values are arrays of the items in each list
    };
  }

  /**
   * This function takes the state of an AddList component as its parameter
   * and updates the state of this App component by adding a new entry to the "lists"
   * array and then adding a new property in the "items" object that has the same name
   * as the value put into the "lists" array. It should then re-render this App component.
   */
  handleAddList(s) {
      // note the s is passed from the AddList component
      // in particular from the handleSubmit method
      let lists = this.state.lists;
      lists.push(s);
      this.setState({lists: lists});

      let items = this.state.items;
      // add key s to items list, with empty list
      items[s] = [];

      this.setState({items: items});
  }



  /**
   * This function takes the state of an AddItem component as its parameter
   * and updates the state of this App component by adding a new value to the
   * appropriate array in the "items" property of the state. Keep in mind that
   * the property names of "items" are the names of each list, which is mapped
   * to an array of the items in that list. After updating the "items" part of
   * the state, this function  should then re-render this App component.
   */
  handleAddItem(s) {
      // s is passed from the AddItem component
      // in particular from the handleSubmit method

      // get current list
      // note AddItem idName (see List.js) is given
      // the listName (from Lists.js)

      let currentList = this.props.idName;
      // then add item
      let itemsObject = this.state.items;
      let listForItem = itemsObject[currentList];
      listForItem.push(s);
      // update itemsObject
      itemsObject[s] = listForItem;
      this.setState({items : itemsObject});


  }

  /**
   * Renders the component.
   */
  render() {
    return (
      <div className="App">
        <AddList addList={this.handleAddList.bind(this)} />
        <div id="listsDiv" className="List">
          <Lists lists={this.state.lists} items={this.state.items} addItem={this.handleAddItem.bind(this)} />
        </div>
      </div>
    );
  }

}

export default App;
