export const base={
        tasks:[
            {
                id:1,
                name:'Clean Server',
                status:'pending',
                priority:'low',
                createDate:new Date('2026-3-23').toLocaleDateString(),
                selected:false
            },
            {
                id:2,
                name:'Reboot Server',
                status:'pending',
                priority:'medium',
                createDate:new Date('2026-3-24').toLocaleDateString(),
                selected:false
            },
            {
                id:3,
                name:'Install SO',
                status:'pending',
                priority:'high',
                createDate:new Date('2026-3-25').toLocaleDateString(),
                selected:false
            },
            {
                id:4,
                name:'Review bugs conection',
                status:'realiced',
                priority:'high',
                createDate:new Date('2026-3-29').toLocaleDateString(),
                selected:false
            }

        ],

        filter:{
            priority:'',
            search:'',
            sortbydate:{
                datebegin:'',
                dateend:''
            }
        },

        darkmode:true,
        
        stats:{
            totaltasks:0,
            totalmedium:0,
            totalhigh:0,
            totallow:0,
            totalpending:0,
            totalrealiced:0
        },
        message:{
            message:'',
            color:''
        },
        isloading:false,                  //si lanza el loader
        userLogged:''               //aqui el usuario logeado
};
