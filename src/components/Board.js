import React from 'react'
import Tile from './Tile'

const Board = ({ currentBoard }) => {
    return (
        <table>
            <tbody className="board-game">
                <tr>
                    <Tile tileInfo={currentBoard[0]}></Tile>
                    <Tile tileInfo={currentBoard[1]}></Tile>
                    <Tile tileInfo={currentBoard[2]}></Tile>
                    <Tile tileInfo={currentBoard[3]}></Tile>
                    <Tile tileInfo={currentBoard[4]}></Tile>
                </tr>
                <tr>
                    <Tile tileInfo={currentBoard[5]}></Tile>
                    <Tile tileInfo={currentBoard[6]}></Tile>
                    <Tile tileInfo={currentBoard[7]}></Tile>
                    <Tile tileInfo={currentBoard[8]}></Tile>
                    <Tile tileInfo={currentBoard[9]}></Tile>
                </tr>
                <tr>
                    <Tile tileInfo={currentBoard[10]}></Tile>
                    <Tile tileInfo={currentBoard[11]}></Tile>
                    <Tile tileInfo={currentBoard[12]}></Tile>
                    <Tile tileInfo={currentBoard[13]}></Tile>
                    <Tile tileInfo={currentBoard[14]}></Tile>
                </tr>
                <tr>
                    <Tile tileInfo={currentBoard[15]}></Tile>
                    <Tile tileInfo={currentBoard[16]}></Tile>
                    <Tile tileInfo={currentBoard[17]}></Tile>
                    <Tile tileInfo={currentBoard[18]}></Tile>
                    <Tile tileInfo={currentBoard[19]}></Tile>
                </tr>
                <tr>
                    <Tile tileInfo={currentBoard[20]}></Tile>
                    <Tile tileInfo={currentBoard[21]}></Tile>
                    <Tile tileInfo={currentBoard[22]}></Tile>
                    <Tile tileInfo={currentBoard[23]}></Tile>
                    <Tile tileInfo={currentBoard[24]}></Tile>
                </tr>
            </tbody>
        </table>
    );
}

export default Board;