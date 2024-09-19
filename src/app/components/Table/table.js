'use client'
import React, { useState } from "react";
import Row from "./row";
import skaterDetails from "./data/skaterDetails";
import stats from "./data/allSkaterStats";

const Table = () => {
    const [sortBy, setSortBy] = useState('')
    const scoredWhileInPlay = stats.reduce((n, {scoredWhileInPlay}) => n + scoredWhileInPlay, 0)
    const pointsAllowed = stats.reduce((n, {pointsAllowed}) => n + pointsAllowed, 0)
    const pointsLost = stats.reduce((n, {pointsLost}) => n + pointsLost, 0)

    const handleChange = (e) => {
        setSortBy(e.target.value)
    }
    // Group stats by skater Id
    const groupedSkaterStats = stats.reduce((skater, stat) => {
        (skater[stat.skaterId] = skater[stat.skaterId] || []).push(stat);
        return skater;

    }, {});

    // Build skater stats for a season (year)
    const allSkaterSeasonStats = skaterDetails.map(({skaterId, skaterName, skaterNumber, team, photo}) => {
        const scoredWhileInPlay = groupedSkaterStats[skaterId].reduce((n, {scoredWhileInPlay}) => n + scoredWhileInPlay, 0)
        const pointsAllowed = groupedSkaterStats[skaterId].reduce((n, {pointsAllowed}) => n + pointsAllowed, 0)
        const pointsLost = groupedSkaterStats[skaterId].reduce((n, {pointsLost}) => n + pointsLost, 0)
        const overallPoints = scoredWhileInPlay - pointsAllowed - pointsLost
        return {
            skaterId,
            skaterName,
            skaterNumber,
            team,
            photo,
            season: groupedSkaterStats[skaterId][0].season,
            scoredWhileInPlay,
            assists: groupedSkaterStats[skaterId].reduce((n, {assists}) => n + assists, 0),
            overallPoints,
            averagePointsPerJam: groupedSkaterStats[skaterId].reduce((n, {pointsPerJam}) => n + pointsPerJam, 0)/groupedSkaterStats[skaterId].length,
            jamCount: groupedSkaterStats[skaterId].reduce((n, {jamCount}) => n + jamCount, 0),
            pointsAllowed,
            pointsLost
        }
    })

    const filteredSeasonStats = sortBy !== '' ? allSkaterSeasonStats.filter((s) => s.team === sortBy) : allSkaterSeasonStats
    
    return (
    <div className="flex flex-col items-center">
        <div className="flex justify-start max-w-5xl min-w-60 w-min">
            <select onChange={handleChange}>
                <option value=''>All Teams</option>
                <option value='Cherry Bombs'>Cherry Bombs</option>
                <option value='Hellcats'>Hellcats</option>
                <option value='Hired Gun$'>Hired Guns</option>
                <option value='Holy Rollers'>Holy Rollers</option>
                <option value='Las Putas del Fuego'>Las Putas del Fuego</option>
                <option value='Rhinestones'>Rhinestones</option>
            </select>
        </div>
        <table className="text-left">
            <tbody>
            <tr>
                <th className="pr-4">Name</th>
                <th className="pr-4">Number</th>
                <th className="pr-4">Team</th>
                {/* <th className="pr-4">Position</th> */}
                <th className="pr-4">GP</th>
                <th className="pr-4">SWIP</th>
                <th className="pr-4">A</th>
                <th className="pr-4">OP</th>
                <th className="pr-4">APJ</th>
                <th className="pr-4">JC</th>
                <th className="pr-4">PA</th>
                <th className="pr-4">PL</th>
            </tr>
            {filteredSeasonStats.map((s) => {
                return <Row key={s.skaterName} photo={s.photo} name={s.skaterName} team={s.team} number={s.skaterNumber} 
                gamesPlayed={s.gamesPlayed} 
                scoredWhileInPlay={s.scoredWhileInPlay} 
                assists={s.assists}
                overallPoints={s.overallPoints}
                avgPointsPerJam={s.averagegPointsPerJam}
                jamCount={s.jamCount}
                pointsAllowed={s.pointsAllowed}
                pointsLost={s.pointsLost}
                />
            })}
            </tbody>
        </table>
    </div>
    )
}

export default Table
