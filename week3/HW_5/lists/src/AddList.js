import React, { Component } from 'react';

class AddList extends Component {
  constructor() {
    super();
    this.state = {
      newList: ""
    }

    this.handleChange = this.handleChange.bind(this);

  }

  handleSubmit(e) {

      // Implement the rest of this function here!
      this.props.addList(this.refs.id.value);
      // now gets sent to addList prop while
      // rendering in App
      // whereby handleAddList is triggered with
      // the id value input here

      this.setState({newList: {} });
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
              onChange = {this.handleChange}
              value={this.state.newList}></input>
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
