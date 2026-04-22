import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export const useFilters=()=>{
    let filters=useSelector((state)=>state.generalState.filter)
    
    const initialdate={
        begindate:'',
        enddate:''
    }
    
    const id={
            begindate:initialdate.datebegin||filters.sortbydate.datebegin,
            enddate:initialdate.dateend||filters.sortbydate.dateend
    }
        
        ////////////////////////////////////////////tasks state
        let taskspriority=useSelector((state)=>state.generalState.tasks)
        const tasklist=taskspriority.map(el=>el.priority).sort()
        const tasksname=taskspriority.map(el=>el.name).sort()
        let myset=new Set(tasklist)
        let finalList=Array.from(myset)

    return {
        filters,initialdate,id,taskspriority,finalList,tasksname
    }
}