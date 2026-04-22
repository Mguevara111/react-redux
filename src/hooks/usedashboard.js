import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { updateTaskStatus } from "../app/conterslice"
import { useNavigate } from "react-router-dom";

export const useDashboard=()=>{
    const selector=useSelector((state)=>state.generalState.tasks)
    const filters=useSelector((state)=>state.generalState.filter)
    const isloading=useSelector((state)=>state.generalState.isloading)
    const userlogged=useSelector((state)=>state.generalState.userLogged)

    const dispatch=useDispatch()
    let navigate=useNavigate()
    ////////////////////////////construccion de filtros para dashboard
    const filtertasks=selector.filter(el=>{
        
        let datebegin=new Date(String(filters.sortbydate.datebegin).replaceAll('-','/')).getDate();
        let dateend=new Date(String(filters.sortbydate.dateend).replaceAll('-','/')).getDate();
        let datecompares=Number(el.createDate.slice(0,2));

        if(el.name === filters.search || el.priority === filters.priority || (datecompares >= datebegin && datecompares <= dateend)) {
            return el
        }
       
    })



    return{
        filtertasks,selector,filters,isloading,userlogged,dispatch,updateTaskStatus,navigate
    }
}
