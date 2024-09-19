import React from "react";
import Image from "next/image";
import logos from './data/teamLogos'

const Row = ({photo, name, team, number, gamesPlayed, scoredWhileInPlay, assists, overallPoints, averagePointsPerJam, jamCount, pointsAllowed, pointsLost}) => {
    return (
            <tr>
                <td><Image alt={`${name} photo`} src={photo} width="43" height="43" className="rounded-full"/>{name}</td>
                <td>{number}</td>
                <td><Image alt={`${team} logo`} src={logos[team]} width="43" height="43"/></td>
                <td>{gamesPlayed}</td>
                <td>{scoredWhileInPlay}</td>
                <td>{assists}</td>
                <td>{overallPoints}</td>
                <td>{averagePointsPerJam}</td>
                <td>{jamCount}</td>
                <td>{pointsAllowed}</td>
                <td>{pointsLost}</td>
            </tr>
    )
}

export default Row