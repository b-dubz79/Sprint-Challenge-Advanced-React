import React from 'react'
import PlayerCard from './PlayerCard'
import useCounter from './useCounter'

const PlayerList = (props) => {
const [count , incrementCount] = useCounter();
    return(
        <div>
            <div>
                <p>You clicked {count} times</p>
                <button onClick={incrementCount}>Click me</button>
            </div>
            {props.teamInfo.map(player => 
                (<PlayerCard player={player}/>)
                )}
        </div>
    )
}

export default PlayerList;