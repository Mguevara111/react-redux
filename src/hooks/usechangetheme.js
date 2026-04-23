import { useSelector } from "react-redux";

export const gettheme=()=>{
    const theme=useSelector((state)=>state.generalState.darkmode)
    //console.log(theme)
    return theme
}