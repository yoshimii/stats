'use client'
import React, { useEffect, useState } from "react";
import Row from "./Row";
import skaterDetails from "./data/skaterDetails";
import stats from "./data/allSkaterStats";

const Table = () => {
    const [filterBy, setFilterBy] = useState('')
    const [sortBy, setSortBy] = useState('scoredWhileInPlay')
    const [sortedSkaters, setSortedSkaters] = useState([])
    const [sortAscending, setSortAscending] = useState(true)

    // Group stats by skater Id
    const groupedSkaterStats = stats.reduce((skater, stat) => {
        (skater[stat.skaterId] = skater[stat.skaterId] || []).push(stat);
        return skater;
    }, {});

    // Build skater stats for a season (year)
    const allSkaterSeasonStats = skaterDetails.map(({ skaterId, skaterName, skaterNumber, team, photo }) => {
        const scoredWhileInPlay = groupedSkaterStats[skaterId].reduce((n, { scoredWhileInPlay }) => n + scoredWhileInPlay, 0)
        const pointsAllowed = groupedSkaterStats[skaterId].reduce((n, { pointsAllowed }) => n + pointsAllowed, 0)
        const pointsLost = groupedSkaterStats[skaterId].reduce((n, { pointsLost }) => n + pointsLost, 0)
        const overallPoints = scoredWhileInPlay - pointsAllowed - pointsLost
        return {
            skaterId,
            skaterName,
            skaterNumber,
            team,
            photo,
            scoredWhileInPlay,
            overallPoints,
            pointsAllowed,
            gamesPlayed: groupedSkaterStats[skaterId].length,
            season: groupedSkaterStats[skaterId][0].season,
            assists: groupedSkaterStats[skaterId].reduce((n, { assists }) => n + assists, 0),
            averagePointsPerJam: (groupedSkaterStats[skaterId].reduce((n, { pointsPerJam }) => n + pointsPerJam, 0) / groupedSkaterStats[skaterId].length).toFixed(3),
            jamCount: groupedSkaterStats[skaterId].reduce((n, { jamCount }) => n + jamCount, 0),
            pointsLost
        }
    })

    const handleChange = (e) => {
        setFilterBy(e.target.value)
    }

    const handleClick = (e) => {
        const targetName = e.target.getAttribute('name')

        if (targetName === 'skaterName' | targetName === 'team') setSortAscending(false)
        else setSortAscending(true)

        setSortBy(targetName)
    }

    useEffect(() => {
        const filteredSeasonStats = filterBy !== '' ? allSkaterSeasonStats.filter((s) => s.team === filterBy) : allSkaterSeasonStats

        setSortedSkaters(filteredSeasonStats.sort((a, b) => {
            if (sortAscending) {
                if (a[sortBy] > b[sortBy]) {
                    return -1;
                }
                if (a[sortBy] < b[sortBy]) {
                    return 1;
                }
                return 0
            } else {
                if (a[sortBy] < b[sortBy]) {
                    return -1;
                }
                if (a[sortBy] > b[sortBy]) {
                    return 1;
                }
                return 0
            }
        }))
    }, [sortAscending, sortBy, filterBy])

    return (
        <>
            <div className="flex justify-center max-w-5xl min-w-60 w-min">
                <select className='rounded w-44 border border-black h-8 m-4' onChange={handleChange}>
                    <option value=''>All Teams</option>
                    <option value='Cherry Bombs'>Cherry Bombs</option>
                    <option value='Hellcats'>Hellcats</option>
                    <option value='Hired Gun$'>Hired Gun$</option>
                    <option value='Holy Rollers'>Holy Rollers</option>
                    <option value='Las Putas del Fuego'>Las Putas del Fuego</option>
                    <option value='Rhinestones'>Rhinestones</option>
                </select>
            </div>
            <div className="flex flex-col items-start lg:items-center overflow-x-auto">
                <table className="text-left mx-2">
                    <tbody>
                        <tr className="text-center">
                            <th className={`px-2 text-center ${sortBy === 'skaterName' ? 'bg-[#b01a1a82] text-black' : 'bg-black text-white'}`} ></th>
                            <th className={`px-2 text-center underline ${sortBy === 'skaterName' ? 'bg-[#b01a1a82] text-black' : 'bg-black text-white'}`} onClick={handleClick} name='skaterName'>Name</th>
                            <th className={`px-2 text-center underline ${sortBy === 'team' ? 'bg-[#b01a1a82] text-black' : 'bg-black text-white'}`} onClick={handleClick} name='team'>Team</th>
                            {/* <th className="px-2 text-center" onClick={handleClick}>Position</th> */}
                            <th className="px-2 text-center bg-black text-white" name='gamesPlayed'>GP</th>
                            <th className={`px-2 text-center underline ${sortBy === 'scoredWhileInPlay' ? 'bg-[#b01a1a82] text-black' : 'bg-black text-white'}`} onClick={handleClick} name='scoredWhileInPlay'>SWIP</th>
                            <th className={`px-2 text-center underline ${sortBy === 'assists' ? 'bg-[#b01a1a82] text-black' : 'bg-black text-white'}`} onClick={handleClick} name='assists'>A</th>
                            <th className={`px-2 text-center underline ${sortBy === 'overallPoints' ? 'bg-[#b01a1a82] text-black' : 'bg-black text-white'}`} onClick={handleClick} name='overallPoints'>OP</th>
                            <th className={`px-2 text-center underline ${sortBy === 'averagePointsPerJam' ? 'bg-[#b01a1a82] text-black' : 'bg-black text-white'}`} onClick={handleClick} name='averagePointsPerJam'>APJ</th>
                            <th className={`px-2 text-center underline ${sortBy === 'jamCount' ? 'bg-[#b01a1a82] text-black' : 'bg-black text-white'}`} onClick={handleClick} name='jamCount'>JC</th>
                            <th className={`px-2 text-center underline ${sortBy === 'pointsAllowed' ? 'bg-[#b01a1a82] text-black' : 'bg-black text-white'}`} onClick={handleClick} name='pointsAllowed'>PA</th>
                            <th className={`px-2 text-center underline ${sortBy === 'pointsLost' ? 'bg-[#b01a1a82] text-black' : 'bg-black text-white'}`} onClick={handleClick} name='pointsLost'>PL</th>
                        </tr>
                        {sortedSkaters.map((s) => {
                            return <Row
                                key={s.skaterName}
                                photo={s.photo}
                                name={s.skaterName}
                                team={s.team}
                                gamesPlayed={s.gamesPlayed}
                                scoredWhileInPlay={s.scoredWhileInPlay}
                                assists={s.assists}
                                overallPoints={s.overallPoints}
                                averagePointsPerJam={s.averagePointsPerJam}
                                jamCount={s.jamCount}
                                pointsAllowed={s.pointsAllowed}
                                pointsLost={s.pointsLost}
                                sortBy={sortBy}
                            />
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Table
