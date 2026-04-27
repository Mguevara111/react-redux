import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Chartsstate } from "./chartsstate";
import { Chartspriority } from "./chartspriority";
import { gettheme } from "../hooks/usechangetheme";


export function Stats(){
    let stats=useSelector((state)=>state.generalState.stats)
    const theme=gettheme()
    
    return(
        <section className={`stats ${!theme?'lightback':''}`}>
            <h2 className={`${!theme?'lightfont':''}`}>Stats</h2>
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
                    <h2 className={`${!theme?'lightfont':''}`}>Status</h2>
                    <Chartsstate lightcontent={`${!theme?false:true}`}></Chartsstate>
                </div>
                <div className="stats__gp">
                    <h2 className={`${!theme?'lightfont':''}`} >Priority</h2>
                    <Chartspriority lightcontent={`${!theme?false:true}`}></Chartspriority>
                </div>
            </article>
        </section>
    );
}