import React from 'react'

const Tile = (props) => {
    return (<td className={props.selectedTiles[props.tileIndex]} onClick={() => props.handleTileClick(props.tileIndex)}>{props.tileInfo}</td>);
}

export default Tile;