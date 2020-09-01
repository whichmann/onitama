import React, { useState, useEffect, useRef } from 'react';
import Cards from './Cards';
import Board from './Board';
import ScoreBoard from './ScoreBoard';



const Game = () => {

    const cardA = ["Flying Tiger", 0, 2, 4];
    const cardB = ["Hidden Dragon", 0, 1, 4];
    const cardC = ["Jumping Norek", 0, 3, 4];
    const cardD = ["Ducking Duck", 0, 1, 4];
    const cardE = ["Obese Goose", 0, 2, 2];

    const [activePlayer, setActivePlayer] = useState("🎅🏽");
    const [selectedPawn, setSelectedPawn] = useState(null);
    const [selectedTiles, setSelectedTiles] = useState(Array(25).fill('no-movement-allowed'));
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
    const [cards, setCards] = useState({
        playerOneCards: [cardA, cardB], playerTwoCards: [cardC, cardD], inactiveCard: [cardE]
    })


    const [currentBoard, setCurrentBoard] = useState(history[0].board);
    const isInitialMount = useRef(true);

    const handlePawnClick = (clickedPawnIndex) => {
        if (clickedPawnIndex === selectedPawn) {
            setSelectedPawn(null);
            setSelectedTiles(Array(25).fill("no-movement-allowed"));
        } else {
            let tileClassesStart = (activePlayer === "🎅🏽" ? selectedTiles.slice(0, clickedPawnIndex) : selectedTiles.slice(0, clickedPawnIndex - 5));
            let tileClassesBetween = (activePlayer === "🎅🏽" ? selectedTiles.slice(clickedPawnIndex + 1, clickedPawnIndex + 5) : selectedTiles.slice(clickedPawnIndex - 4, clickedPawnIndex));
            let tileClassesEnd = (activePlayer === "🎅🏽" ? selectedTiles.slice(clickedPawnIndex + 6, 25) : selectedTiles.slice(clickedPawnIndex + 1, 25));

            let newTileClasses = (activePlayer === "🎅🏽" ? tileClassesStart.concat("active-pawn", tileClassesBetween, "movement-allowed", tileClassesEnd) : tileClassesStart.concat("movement-allowed", tileClassesBetween, "active-pawn", tileClassesEnd));

            setSelectedTiles(newTileClasses);
            setSelectedPawn(clickedPawnIndex);
        }
    }

    const handlePawnMovement = (movedPawnIndex, destinationTileIndex) => {
        let beginningBoard = (activePlayer === "🎅🏽" ? currentBoard.slice(0, movedPawnIndex) : currentBoard.slice(0, destinationTileIndex));
        let betweenBoard = (activePlayer === "🎅🏽" ? currentBoard.slice(movedPawnIndex + 1, destinationTileIndex) : currentBoard.slice(destinationTileIndex + 1, movedPawnIndex));
        let endBoard = (activePlayer === "🎅🏽" ? currentBoard.slice(destinationTileIndex + 1, 25) : currentBoard.slice(movedPawnIndex + 1, 25));

        let newBoard = (activePlayer === "🎅🏽" ? beginningBoard.concat("", betweenBoard, activePlayer, endBoard) : beginningBoard.concat(activePlayer, betweenBoard, "", endBoard));
        setHistory([...history, { board: newBoard }]);
    }

    const handleTileClick = (i) => {
        if (selectedPawn === null && currentBoard[i] === activePlayer) {
            handlePawnClick(i);
            return;
        } else if (selectedPawn === i) {
            setSelectedTiles(Array(25).fill("no-movement-allowed"));
            setSelectedPawn(null);
            return;
        } else if (selectedTiles[i] === "movement-allowed") {
            handlePawnMovement(selectedPawn, i);
            setSelectedTiles(Array(25).fill("no-movement-allowed"));
            setSelectedPawn(null);
            activePlayer === "🎅🏽" ? setActivePlayer("🕵🏽‍♀️") : setActivePlayer("🎅🏽");
            return;
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
            <button onClick={() => { setHistory([...history, { board: history[0].board }]); setSelectedPawn(null); setActivePlayer("🎅🏽"); setSelectedTiles(Array(25).fill("no-movement-allowed")) }}>Reset the board</button>
            <Cards cards={cards.playerOneCards} activePlayer={"🎅🏽"}></Cards>
            <Board selectedTiles={selectedTiles} handleTileClick={handleTileClick} currentBoard={currentBoard}></Board>
            <ScoreBoard></ScoreBoard>
            <Cards cards={cards.playerTwoCards} activePlayer={"🕵🏽‍♀️"}></Cards>
        </div>
    );
}

export default Game;