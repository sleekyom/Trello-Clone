import React, { Component } from 'react';
import './TrelloBoard.css';
import List from './List';
//import Card from './Card';

export class TrelloBoard extends Component {
    state = {
        board: [
            {
                id: 1,
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
                id: 2,
                name: 'In Progress',
                cards: [
                    {
                        name: 'User can add menu',
                    }
                ]
            },
            {
                id: 3,
                name: 'Code Review',
                cards: []
            },
            {
                id: 4,
                name: 'Done',
                cards: []
            },
        ]
    }

    render() {
        return (
            <div className='board'>
                {
                    // this.state.board.filter(list => list.cards.length>0).map(list =>{
                    //     return <List listdata={list}/>
                    // })

                    this.state.board.map(list =>{
                        return <List key={list.id} listdata={list} />  
                    })
                }
            </div>
        )
    }
}

export default TrelloBoard
