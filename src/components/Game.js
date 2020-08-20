import React, { useState, useEffect, useRef } from 'react';
import NonActivePlayerCards from './NonActivePlayerCards';
import ActivePlayerCards from './ActivePlayerCards';
import Board from './Board';
import ScoreBoard from './ScoreBoard';



const Game = () => {

    const [history, setHistory] = useState([{
        board: [
            "X", "X", "X", "X", "X",
            "", "", "", "", "",
            "", "", "", "", "",
            "", "", "", "", "",
            "O", "O", "O", "O", "O"
        ]
    }]);
    const [currentBoard, setCurrentBoard] = useState(history[0].board);
    const isInitialMount = useRef(true);

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            setCurrentBoard(history[history.length - 1].board);
        }
    });

    return (
        <div>
            <button onClick={() => { setHistory([...history, {board: Array(25).fill("S")}]) }}>Add history</button>
            <NonActivePlayerCards></NonActivePlayerCards>
            <Board currentBoard={currentBoard}></Board>
            <ScoreBoard></ScoreBoard>
            <ActivePlayerCards></ActivePlayerCards>
        </div>
    );
}

export default Game;