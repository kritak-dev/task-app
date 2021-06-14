import React, { Component } from 'react';

class Form extends Component {
    
    handleChange = (e) => {
        this.props.handleChange(e.target.value);
    };

    handleSubmit = (e) => {
        this.props.handleSubmit(e,this.props.task)
    };

    render() {
        const { task } = this.props;
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Enter task" value={task.name} onChange={this.handleChange} />
                <button type="submit">Submit</button>
            </form>
        )
    };
}

export default Form;