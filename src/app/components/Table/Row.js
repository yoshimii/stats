import React from "react";
import Image from "next/image";
import logos from './data/teamLogos'

const Row = ({ photo, name, team, gamesPlayed, scoredWhileInPlay, assists, overallPoints, averagePointsPerJam, jamCount, pointsAllowed, pointsLost, sortBy }) => {
    return (
        <tr className="h-16">
            <td className={`px-1 min-w-11 min-h-11 ${sortBy === 'skaterName' ? 'bg-[#b01a1a82] font-bold' : ''}`}><Image alt={`${name} photo`} src={photo} width="43" height="43" className="rounded-full mr-2 border border-black" /></td>
            <td className={`pr-12 text-nowrap ${sortBy === 'skaterName' ? 'bg-[#b01a1a82] font-bold' : ''}`}>{name}</td>
            <td className={`px-1 text-center ${sortBy === 'team' ? 'bg-[#b01a1a82] font-bold' : ''} `}><Image alt={`${team} logo`} src={logos[team]} width="43" height="43" /></td>
            <td className={`text-center ${sortBy === 'gamesPlayed' ? 'bg-[#b01a1a82] font-bold' : ''} `}>{gamesPlayed}</td>
            <td className={`text-center ${sortBy === 'scoredWhileInPlay' ? 'bg-[#b01a1a82] font-bold' : ''} `}>{scoredWhileInPlay}</td>
            <td className={`text-center ${sortBy === 'assists' ? 'bg-[#b01a1a82] font-bold' : ''} `}>{assists}</td>
            <td className={`text-center ${sortBy === 'overallPoints' ? 'bg-[#b01a1a82] font-bold' : ''} `}>{overallPoints}</td>
            <td className={`text-center ${sortBy === 'averagePointsPerJam' ? 'bg-[#b01a1a82] font-bold' : ''} `}>{averagePointsPerJam}</td>
            <td className={`text-center ${sortBy === 'jamCount' ? 'bg-[#b01a1a82] font-bold' : ''} `}>{jamCount}</td>
            <td className={`text-center ${sortBy === 'pointsAllowed' ? 'bg-[#b01a1a82] font-bold' : ''} `}>{pointsAllowed}</td>
            <td className={`text-center ${sortBy === 'pointsLost' ? 'bg-[#b01a1a82] font-bold' : ''} `}>{pointsLost}</td>
        </tr>
    )
}

export default Row