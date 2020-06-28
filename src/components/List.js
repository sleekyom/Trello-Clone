import React, { Component } from 'react';
import Card from './Card';
import './List.css';

export class List extends Component {

    render() {
        return (
            <div className="list">
                {this.props.listdata.name}
                <Card carditems={this.props.listdata} />
            </div>
        )
    }
}

export default List
