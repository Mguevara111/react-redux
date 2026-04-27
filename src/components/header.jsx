import React from "react";
import { Link } from "react-router-dom";
import logodark from '../assets/images/logonbg.png'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setMessage, setUserloged, toggleTheme } from "../app/conterslice";
import { gettheme } from "../hooks/usechangetheme";


export function Header(){
    //let theme=useSelector((state)=>state.generalState.darkmode)
    let theme=gettheme()
    
    let userLogged=useSelector((state)=>state.generalState.userLogged)

    const dispatch=useDispatch();

    const handlelogout=()=>{
        dispatch(setUserloged(''))
        dispatch(setMessage({
            message:'Logout sucessfully',
            color:'green'
        }))
    }

    const handlechangetheme=(e)=>{
        if(e.target.dataset.theme === 'dark'){
            //console.log('light')
            dispatch(toggleTheme(false))
            return
        }
        dispatch(toggleTheme(true))
    }

    return(
        <section className={`header ${!theme?'lightback':''}`}>
            <Link to="/">
                <img className="header__logo" src={logodark} alt="logo" />
            </Link>
            
            <div className="header__icons">
                {theme? 
                    <svg data-theme="dark" onClick={handlechangetheme} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
                        <path  data-theme="dark" onClick={handlechangetheme} d="M565-395q35-35 35-85t-35-85q-35-35-85-35t-85 35q-35 35-35 85t35 85q35 35 85 35t85-35Zm-226.5 56.5Q280-397 280-480t58.5-141.5Q397-680 480-680t141.5 58.5Q680-563 680-480t-58.5 141.5Q563-280 480-280t-141.5-58.5ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z"/></svg>
                    :
                    <svg data-theme="light" className={`${!theme?'lightsvg':''}`} onClick={handlechangetheme} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
                        <path data-theme="light" className={`${!theme?'lightsvg':''}`} onClick={handlechangetheme} d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"/></svg>
                }
                {!userLogged?
                <Link to='login'>
                    <svg className={`header__login ${!theme?'lightsvg':''}`} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm146.5-204.5Q340-521 340-580t40.5-99.5Q421-720 480-720t99.5 40.5Q620-639 620-580t-40.5 99.5Q539-440 480-440t-99.5-40.5ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm100-95.5q47-15.5 86-44.5-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160q53 0 100-15.5ZM523-537q17-17 17-43t-17-43q-17-17-43-17t-43 17q-17 17-17 43t17 43q17 17 43 17t43-17Zm-43-43Zm0 360Z"/></svg>
                </Link>
                :
                <article className="header__logged">
                    <p>Welcome {userLogged}</p>
                    <svg onClick={handlelogout} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
                    <path onClick={handlelogout}   d="M200-120q-33 0-56.5-23.5T120-200v-160h80v160h560v-560H200v160h-80v-160q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm220-160-56-58 102-102H120v-80h346L364-622l56-58 200 200-200 200Z"/></svg>
                </article>
                }
            </div>
            
            
        </section>
    );
}