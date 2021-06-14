import React, { Component } from 'react';

class Overview extends Component {
    //constructor(props) {
        //super(props);
    //}

    handleDelete = (e) => {
        this.props.onDelete(e.target.id);
    };

    render() {
        const { tasks } = this.props;
        return (
            <div>
                { tasks.map((task, ind) => {
                    return (
                        <div key={task.id} id={task.id}>
                            {ind + 1} { task.name }
                            <div>
                                <button id={task.id} onClick={this.handleDelete}>Delete</button>
                                <button>Edit</button>
                            </div>
                        </div>
                    );
                }) }
            </div>
        );
    };
}

export default Overview;