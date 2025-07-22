'use client'
import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);


const DoughnutChart = ({accounts}:DoughnutChartProps) => {
    const data = {
        datasets: [
            {
                label: 'Banks',
                data: [120, 150, 180, 90, 200], // Example data, replace with actual data
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                ],

            },

        ],
        labels: ['Bank A', 'Bank B', 'Bank C', 'Bank D', 'Bank E'], // Example labels, replace with actual bank names
    };
  return (
    <Doughnut data={data} options={
        {
            cutout:'70%',
            responsive: true,
            plugins: {
                legend: {
                    display: false,
                },
                
            },
        }
    } />
  )
}

export default DoughnutChart