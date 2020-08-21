import React, { useState, useEffect, useRef } from 'react';
import NonActivePlayerCards from './NonActivePlayerCards';
import ActivePlayerCards from './ActivePlayerCards';
import Board from './Board';
import ScoreBoard from './ScoreBoard';



const Game = () => {
    const [activePlayer, setActivePlayer] = useState("🎅🏽")
    const [history, setHistory] = useState([{
        board: [
            "🎅🏽", "🎅🏽", "🎅🏽", "🎅🏽", "🎅🏽",
            "", "", "", "", "",
            "", "", "", "", "",
            "", "", "", "", "",
            "🕵🏽‍♀️", "🕵🏽‍♀️", "🕵🏽‍♀️", "🕵🏽‍♀️", "🕵🏽‍♀️",
        ]
        // board: [
        //     "0s", "1", "2", "3", "4",
        //     "5", "6", "7", "8", "9",
        //     "10", "11", "12s", "13", "14", 
        //     "15", "16", "17", "18", "19",
        //     "20", "21", "22", "23", "24s",
        // ]
    }]);
    const [currentBoard, setCurrentBoard] = useState(history[0].board);
    const isInitialMount = useRef(true);

    const handleTileClick = (i) => {
        if (currentBoard[i] === activePlayer && ((activePlayer === "🎅🏽" && i < 20) || (activePlayer !== "🎅🏽" && i > 4))) {
            activePlayer === "🎅🏽" ? setActivePlayer("🕵🏽‍♀️") : setActivePlayer("🎅🏽");
            let beginningBoard = (activePlayer === "🎅🏽" ? currentBoard.slice(0, i) : currentBoard.slice(0, i-5));
            let betweenBoard = (activePlayer === "🎅🏽" ? currentBoard.slice(i + 1, i + 5) : currentBoard.slice(i-4,i));
            let endBoard = (activePlayer === "🎅🏽" ? currentBoard.slice(i + 6, 25) : currentBoard.slice(i+1,25));
            let newBoard = (activePlayer === "🎅🏽" ? beginningBoard.concat("", betweenBoard, activePlayer, endBoard) : beginningBoard.concat(activePlayer,betweenBoard,"",endBoard));
            setHistory([...history, { board: newBoard }]);
        }
    }

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            setCurrentBoard(history[history.length - 1].board);
        }
    }, [history]);

    return (
        <div>
            <h3>Active Player: {activePlayer}</h3>
            <button onClick={() => { setHistory([...history, { board: history[0].board }]) }}>Reset the board</button>
            <NonActivePlayerCards></NonActivePlayerCards>
            <Board handleTileClick={handleTileClick} currentBoard={currentBoard}></Board>
            <ScoreBoard></ScoreBoard>
            <ActivePlayerCards></ActivePlayerCards>
        </div>
    );
}

export default Game;