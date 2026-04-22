import React from "react";

import { Link } from "react-router-dom";

export function E404(){
    return(
        <section className="e404">
            <Link to='/'>
                <button className="button e404btn">Return</button>
            </Link>
        </section>
    );
}