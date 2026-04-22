import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


export function Statsinfo(){
  
    let stats=useSelector((state)=>state.generalState.stats)
    
    return(
        <section className="statsinfo">
            {/* <h2>Stats</h2> */}
            <article className="statsinfo__container">
                <div className="statsinfo__data">
                    <p><b>Total Tasks:</b>{stats.totaltasks}</p>
                    <p><b>Total Pending:</b>{stats.totalpending}</p>
                    <p><b>Total Realiced:</b>{stats.totalrealiced}</p>
                    <p><b>Critical Count:</b>{stats.totalhigh}</p>
                </div>
                <Link to='/stats'>
                    <button className="button">See stats</button>
                </Link>
            </article>
                
            
        </section>
    );
}