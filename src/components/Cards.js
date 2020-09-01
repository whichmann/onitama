import React from 'react'

const Cards = ({ cards, activePlayer, handleCardClick }) => {
    console.log(cards);
    return (
        <>
            <h1>{activePlayer} cards</h1>
            <ul>
                <li onClick={() => { handleCardClick(0) }}>{cards[0][1]}</li>
                <li onClick={() => { handleCardClick(1) }}>{cards[1][1]}</li>
            </ul>
        </>
    )
}

export default Cards;