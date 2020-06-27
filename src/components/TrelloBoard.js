import React, { Component } from 'react';
import './TrelloBoard.css';
import List from './List'

export class TrelloBoard extends Component {
    state={
        board:[
            {
                name: 'Todos',
                cards: [
                    {
                        name: 'User can sign in',
                    },
                    {
                        name: 'User can sign out',
                    }
                ]
            },

            {
                name: 'In Progress',
                cards: [
                    {
                        name: 'User can add menu',
                    }
                ]
            },
            {
                name: 'Code Review',
                cards: []
            },
            {
                name: 'Done',
                cards: []
            },
        ]
    }

    render() {
        return (
            <div className='board'>
                {
                    this.state.board.filter(list => list.cards.length>0).map(list =>{
                        return <List listdata={list}/>
                    })
                }
            </div>
        )
    }
}

export default TrelloBoard
