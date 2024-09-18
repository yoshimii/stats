import React from "react";
import Row from "./row";
import skaterDetails from "./data/skaterDetails";
import stats from "./data/allSkaterStats";

const Table = () => {
    const scoredWhileInPlay = stats.reduce((n, {scoredWhileInPlay}) => n + scoredWhileInPlay, 0)
    const pointsAllowed = stats.reduce((n, {pointsAllowed}) => n + pointsAllowed, 0)
    const pointsLost = stats.reduce((n, {pointsLost}) => n + pointsLost, 0)

    const ambiStats = {
        gamesPlayed: stats.length,
        scoredWhileInPlay,
        assists: stats.reduce((n, {assists}) => n + assists, 0),
        overallPoints: scoredWhileInPlay - pointsAllowed - pointsLost,
        avgPointsPerJam: (stats.reduce((n, {ptsPerJam}) => n + ptsPerJam, 0)/stats.length).toFixed(3),
        jamCount: stats.reduce((n, {jamCount}) => n + jamCount, 0),
        pointsAllowed,
        pointsLost,
    }
    const allSkaterStats = skaterDetails.map((skaterInfo) => {
        return {
            ...skaterInfo,
            ...ambiStats
        }
    })
    return (
<div className="flex justify-center">
    <table className="text-left	">
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
        {allSkaterStats.map((s) => {
            return <Row key={s.skaterName} photo={s.photo} name={s.skaterName} team={s.team} number={s.skaterNumber} 
            gamesPlayed={s.gamesPlayed} 
            scoredWhileInPlay={s.scoredWhileInPlay} 
            assists={s.assists}
            overallPoints={s.overallPoints}
            avgPointsPerJam={s.avgPointsPerJam}
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