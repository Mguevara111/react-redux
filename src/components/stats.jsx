import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Chartsstate } from "./chartsstate";
import { Chartspriority } from "./chartspriority";


export function Stats(){
    let stats=useSelector((state)=>state.generalState.stats)
    
    return(
        <section className="stats">
            <h2>Stats</h2>
            <article className="stats__info">
                
                <p><b>Total Tasks:</b>{stats.totaltasks}</p>
                <p><b>Total Pending:</b>{stats.totalpending}</p>
                <p><b>Total Realiced:</b>{stats.totalrealiced}</p>
                <p><b>Critical Count:</b>{stats.totalhigh}</p>
            </article>
            <Link to='/'>
                <button className="button">Return</button>
            </Link>
            <article className="stats__graphs">
                <div className="stats__gp">
                    <h2>Status</h2>
                    <Chartsstate></Chartsstate>
                </div>
                <div className="stats__gp">
                    <h2>Priority</h2>
                    <Chartspriority></Chartspriority>
                </div>
            </article>
        </section>
    );
}