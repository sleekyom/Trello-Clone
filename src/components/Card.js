import React, { Component } from 'react';
import './Card.css';

export class Card extends Component {
    render() {
        return (
            <div className="card">
                {/* {this.props.carditems.cards} */}
                {console.log(this.props.carditems.cards)}
            </div>
        )
    }
}

export default Card
