import React from 'react'
import PlayerCard from './PlayerCard'

const PlayerList = (props) => {
// console.log(props)
    return(
        <div>
            {props.teamInfo.map(player => 
                (<PlayerCard player={player}/>)
                )}
        </div>
    )
}

export default PlayerList;