import React from 'react'

const Tile = (props) => {
    console.log(props)
    return (<td onClick={() => props.handleTileClick(props.tileIndex)}>{props.tileInfo}</td>);
}

export default Tile;