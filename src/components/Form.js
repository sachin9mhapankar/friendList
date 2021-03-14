import React, {Component} from 'react';

class Form extends Component  {
  handleSubmit = (ev) => {
    ev.preventDefault();
    let name = this.refs.name.value;
    if(name) {
      this.props.onAdd({
        name
      });
      ev.target.reset();
    }
  }
  render() {
    return (<form onSubmit={this.handleSubmit}>
        <input ref="name" placeholder="Enter Your Friends Name" />
        <button>Add Friend</button>
    </form>);
  }
}

export default Form;