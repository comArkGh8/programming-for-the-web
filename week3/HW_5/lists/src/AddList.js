import React, { Component } from 'react';

class AddList extends Component {


  // used https://stackoverflow.com/questions/46539480/react-clearing-an-input-value-after-form-submit/46539556
  // to get idea of how to clear input form after submit
  constructor() {
    super();
    this.state = {
      newList: ""
    }
  }

  handleSubmit(e) {

      // Implement the rest of this function here!
      this.props.addList(this.refs.id.value);
      // value (which is the list name) is
      // sent to addList prop while rendering in App
      // whereby handleAddList is triggered with
      // the id value input here

      // set the newList state to blank so the value in
      // input field updates to blank
      this.setState({newList: "" });


      e.preventDefault(); // this prevents the page from reloading -- do not delete this line!

  }

  handleChange(e){
    this.setState({
      newList: e.target.value
    });
  }

  render() {
    return (
      <div id="addListDiv">
        <form onSubmit={this.handleSubmit.bind(this)}>

          <div id='addList'>
            <label>What will be on your next list?&nbsp;
              <input type='text' ref='id' id='newID'
                onChange = {this.handleChange.bind(this)}
                value={this.state.newList}>
              </input>
            </label>
          </div>

          <br />
          <input type='submit' value='Create List' />
        </form>
      </div>
    );
  }
}

export default AddList;
