import React from "react";
import Image from "next/image";
import logos from './data/teamLogos'

const Row = ({photo, name, team, number, gamesPlayed, scoredWhileInPlay, assists, overallPoints, averagePointsPerJam, jamCount, pointsAllowed, pointsLost}) => {
    return (
            <tr className="h-16">
                <td className="mr-1 min-w-11 min-h-11"><Image alt={`${name} photo`} src={photo} width="43" height="43" className="rounded-full mr-2"/></td>
                <td className="pr-12 text-nowrap">{name}</td>
                <td className="mr-1">{number}</td>
                <td className="mr-1"><Image alt={`${team} logo`} src={logos[team]} width="43" height="43"/></td>
                <td className="mr-1">{gamesPlayed}</td>
                <td className="mr-1">{scoredWhileInPlay}</td>
                <td className="mr-1">{assists}</td>
                <td className="mr-1">{overallPoints}</td>
                <td className="mr-1">{averagePointsPerJam}</td>
                <td className="mr-1">{jamCount}</td>
                <td className="mr-1">{pointsAllowed}</td>
                <td className="mr-1">{pointsLost}</td>
            </tr>
    )
}

export default Row