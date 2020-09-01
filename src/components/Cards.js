import React from 'react'

const Cards = ({ cards, activePlayer }) => {
    console.log(cards);
    return (
        <>
            <h1>{activePlayer} cards</h1>
            <ul>
                <li>{cards[0][0]}</li>
                <li>{cards[1][0]}</li>
            </ul>
        </>
    )
}

export default Cards;