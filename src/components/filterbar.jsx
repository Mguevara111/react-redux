import React from "react";

import { useDispatch } from "react-redux";
import { setSearch,setPriority,resetfilters,setMessage,setDate} from "../app/conterslice";
import { useState,useRef } from "react";

import { useFilters } from "../hooks/usefilters";

export function Filterbar(){
    /////////////mighrando del custom hook usefilters
    const {filters,initialdate,id,taskspriority,finalList,tasksname}=useFilters();

    const [searchtask,setSearchtask]=useState('');
    const [datelocal,setDatelocal]=useState(id);
    
    //////////////////////////////////////dispatch
    let dispatch=useDispatch();

    let selectref=useRef(null)
    let datebeginref=useRef(null)
    let dateendref=useRef(null)

    const handlechange=(e)=>{
        setSearchtask(e.target.value)
        
        dispatch(setSearch(e.target.value))
    }

    const handlechangepriority=(e)=>{
            dispatch(setPriority(e.target.value))
    }

    const handlechangedate=(e)=>{
        
        if(e.target.dataset.type === 'begin'){
            setDatelocal({
                ...datelocal,
                begindate:e.target.value
            })
            
        }
        if(e.target.dataset.type === 'end'){
            setDatelocal({
                ...datelocal,
                enddate:e.target.value
            })
        }
        
    }

    const handlesearchdate=()=>{
        if(!datelocal.begindate || !datelocal.enddate){
            dispatch(setMessage({
                message:'You must choose two dates to filter',
                color:'yellow'
            }))
            return;
        }
        
        if(datelocal.begindate > datelocal.enddate){
            dispatch(setMessage({
                message:'End date must be greater than begin date',
                color:'yellow'
            }))
            return;
        }
        
        dispatch(setDate({
            datebegin:datelocal.begindate,
            dateend:datelocal.enddate
        }))
    }

    const handlereset=()=>{
        dispatch(resetfilters())
        setSearchtask('')
        selectref.current.value='---'
        setDatelocal(initialdate)
    }

    

    return(
        <section className="filterbar">
            <h2>Filters</h2>
            <button className="button" onClick={handlereset}>Reset filters</button>
            <article className="filterbar__filters">
                <div className="filterbar__ps">
                        <div className="filterbar__filter">
                            <p>Priority:</p>
                            <select name="priority" id="" ref={selectref} onChange={handlechangepriority} value={filters.priority}>
                                    <option value="---">---</option>
                                {finalList.map((el,i)=>
                                    <option key={i}>{el}</option>
                                )}
                            </select>
                        </div>

                        <div className="filterbar__filter">
                            <p>Search name:</p>
                            <input  type="text" list="tasklist" onChange={handlechange} value={searchtask||filters.search}/>
                            <datalist id="tasklist">
                                {tasksname.map((el,i)=>
                                    <option key={i}>{el}</option>
                                )}
                            </datalist>
                        </div>
                </div>
                <div className="filterbar__filterdate">
                    <p>Date:</p>
                    <div className="filterbar__datecontainer">
                        <p>From:</p>
                        <p>To:</p>
                        <input className="filterbar__dateinput" type="date" data-type="begin" 
                            onChange={handlechangedate} 
                            value={datelocal.begindate}
                            ref={datebeginref}/>
                    
                    
                        <input className="filterbar__dateinput"  type="date" data-type="end" 
                            onChange={handlechangedate} 
                            value={datelocal.enddate}
                            ref={dateendref}/>
                    </div>
                    <br />
                    <button className="button" onClick={handlesearchdate}>Search Date</button>
                </div>
            </article>
        </section>
    );
}