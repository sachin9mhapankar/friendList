import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import Form from './components/Form';
import Table from './components/Table';
import { getItems } from './mockData';

class App extends Component {
  state = {
    items: []
  }

  componentDidMount(){
    getItems().then((items) => {
      console.log(items);
      this.setState({
        items
      });
    });
  }

  addTask = ({name}) => {
    this.setState({
      items: [{
        id: this.state.items.length + 1,
        name,
        fav:0,
      }, ...this.state.items]
    });
  }

  toggleChecked = (id) => {
    this.setState({
      items: this.state.items.map((item) => (item.id !== id ) ? item : {
          ...item,
          fav: !item.fav
        }
      )
    })
  }

  render() {
    return (
      <div>
        Friends List
        <Form onAdd={this.addTask}/>
        <Table items={this.state.items} toggleChecked={this.toggleChecked}/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
