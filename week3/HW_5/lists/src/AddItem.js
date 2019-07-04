import React, { Component } from 'react';

class AddItem extends Component {

  constructor() {
    super();
    this.state = {
      newItem:{}
    }
  }

  handleSubmit(e) {
      e.preventDefault(); // this prevents the page from reloading -- do not delete this line!

      // Implement the rest of this function here!
      this.props.addItem(this.refs.id.value);
      // value (which is the entered item name) is
      // sent to addItem prop while rendering in App
      // whereby handleAddList is triggered with
      // the id value input here

      // set the newList state to blank so the value in
      // input field updates to blank
      this.setState({newList: "" });
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
