import React, { Component } from 'react';
import Overview from './components/Overview';
import Form from './components/Form';
import uniqid from 'uniqid';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task: {
        name: '',
        id: uniqid(),
      },
      tasks: [],
    };
  }

  handleChange = (value) => {
    this.setState({
      task: {
        name: value,
        id: this.state.task.id,
      }
    });
  };

  handleSubmit = (e, task) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(task),
      task: {
        name: '',
        id: uniqid(),
      }
    });
  };

  handleDelete = (id) => {
    this.setState({
    tasks: this.state.tasks.filter(task => task.id !== id),
    })
  }

  render() {
    const { task, tasks } = this.state;
    return  (
      <div>
        <Form task={task} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        <Overview tasks={tasks} onDelete={this.handleDelete} />
      </div>
    );
  }
}

export default App;
