import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { useSelector } from 'react-redux';


ChartJS.register(ArcElement, Tooltip, Legend);

const labelspie=['Pending', 'Realiced']


export function Chartsstate({lightcontent}){
  const stats=useSelector((state)=>state.generalState.stats)
  //console.log(lightcontent)
  let datastatus=[stats.totalpending,stats.totalrealiced]
  
  const datapie = {
  labels:labelspie,
  datasets: [
    {
      label: 'Tasks Status',
      data:datastatus,
      backgroundColor: [
        lightcontent?'rgba(128,0,128,0.9)':'rgba(153, 102, 255, 0.9)',
        lightcontent?'rgba(0,0,255,0.7)':'rgba(54, 162, 235, 0.9)',
        'rgba(255, 99, 132, 0.8)',
        'rgba(255, 206, 86, 0.8)',
        'rgba(75, 192, 192, 0.8)',
        'rgba(255, 159, 64, 0.8)',
      ],
      borderColor: [
        'rgba(255, 255, 255, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderWidth: 1,
    },
  ],
};

const optionsPie = {
  plugins: {
    legend: {
      position: 'bottom', // Opcional: poner la leyenda abajo se ve muy bien en Dashboards
      labels: {
        color: lightcontent?'#000':'#00FFFF', // Color de las letras de la leyenda
        padding: 20,
        font: { size: 14 }
      }
    }
  }
};
  
  return (
    // <section className="charts">
      <Pie className="stats__stats" data={datapie} options={optionsPie}/>
    //* </section> */
  );
}
