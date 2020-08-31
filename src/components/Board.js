import React from 'react'
import Tile from './Tile'

const Board = ({ currentBoard, selectedTiles, handleTileClick }) => {

    return (
        <table>
            <tbody className="board-game">
                {[...Array(5)].map((i, trIndex) =>
                    <tr key={trIndex}>
                        {[...Array(5)].map((j, tileIndex) =>
                            <Tile selectedTiles={selectedTiles} handleTileClick={handleTileClick} key={(trIndex * 5) + tileIndex} tileIndex={(trIndex * 5) + tileIndex} tileInfo={currentBoard[(trIndex * 5) + tileIndex]}></Tile>
                        )}
                    </tr>
                )}
            </tbody>
        </table>
    );
}

export default Board;