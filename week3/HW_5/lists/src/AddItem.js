import React, { Component } from 'react';

class AddItem extends Component {

  constructor() {
    super();
    this.state = {
      newItem:{} // newItem is of form {list: listName, item: itemName}
    }
  }

  handleSubmit(e) {
      e.preventDefault(); // this prevents the page from reloading -- do not delete this line!

      // Implement the rest of this function here!
      // get listName
      var listName = this.props.idName; // see List.js

      this.setState({newItem:{
          list: listName,
          item: this.refs.id.value,
        }}, function() {
          this.props.addItem(this.state.newItem);
          // value (which is {listName: the entered item name}) is
          // sent to addItem prop while rendering in App
          // whereby handleAddList is triggered with
          // the id value input here
          // the idea of using function is that it
          // says update state before sending to add Item
          }
      );
  }


  render() {
    var divName = 'add' + this.props.idName;
    return (
      <div className='addItemDiv'>
        <h4>Add {this.props.idName}</h4>
        <form ref='form' onSubmit={this.handleSubmit.bind(this)}>
          <div id={divName} ref={divName}>
            <label>Name</label><br />
            <input type='text' ref='id' />
          </div>
          <br />
            <input type='submit' value='Submit' />
          <br />
        </form>
      </div>
    );
  }

}

export default AddItem;
