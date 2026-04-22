import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labels=['Low','Medium','High']


export function Chartspriority(){
  const stats=useSelector((state)=>state.generalState.stats)
  let datapriority=[stats.totallow,stats.totalmedium,stats.totalhigh]
  
  
const data = {
  labels,
  datasets: [
    {
      label: 'Priority',
      data: datapriority,
      backgroundColor: 'rgba(54, 162, 235, 0.8)',
    }
  ]
};

const optionsBar = {
  scales: {
    y: {
      ticks: { color: '#00FFFF' }, // Tus letras en Cyan
      grid: { color: 'rgba(255, 255, 200, 0.8)' } // Líneas horizontales muy tenues
    },
    x: {
      ticks: { color: '#00FFFF' }, // Tus etiquetas en Violeta
      grid: { display: false } // Quitamos las líneas verticales para que sea más limpio
    }
  },
  plugins: {
    legend: {
      labels: { color: '#00FFFF' } // El texto de "Priority" en Cyan
    }
  }
};
  
  return (
    // <section className="charts">
      <Bar className='chartpriority stats__stats' data={data} options={optionsBar}/>
    // </section>
  );
}
