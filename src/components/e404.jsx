import React from "react";
import { Link } from "react-router-dom";

export function E404(){
    return(
        <section className="e404">
            <h2>pagina 404</h2>
            <Link to='/'>
                <button>Return</button>
            </Link>
        </section>
    );
}