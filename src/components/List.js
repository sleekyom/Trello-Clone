import React, { Component } from 'react';
import './List.css';

export class List extends Component {
    render() {
        return (
            <div className="list">
                {this.props.listdata.name}
            </div>
        )
    }
}

export default List
