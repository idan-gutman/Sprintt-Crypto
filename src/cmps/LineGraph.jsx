import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import 'chartjs-adapter-date-fns';



export const LineGraph = ({ price, date }) => {

    const data = {
        labels: date,
        datasets: [
            {
                label: '# of Votes',
                data: price,
                fill: false,
                backgroundColor: 'rgb(150,148,242)',
                borderColor: 'rgb(150,148,242)',
                pointRadius: 0,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        elements: {
            line: {
                tension: 0.5
            }
        },
        scales: {
            x:
            {
                type:'time',
                time:{
                    minUnit:'hour'
                },

                ticks: {
                    beginAtZero: false,
                    color: '#A5A5A5',
                    font: {
                        family: "Roboto"
                    }
                },
                grid: {
                    borderWidth: 0,
                    lineWidth: false
                },
            }

            ,
            y: {
                ticks: {
                    callback: function (value, index, values) {
                        if(parseInt(value) >= 1000){
                            return '$' + value.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                          } else {
                            return '$' + value.toFixed(2);
                          }
                    },
                    beginAtZero: false,
                    color: '#A5A5A5',
                },
                grid: {
                    borderWidth: 0,
                    lineWidth: 1,
                    color: '#3C3B48',

                }
            },
        },
    };

    return (
        <div className="canvas-container">
            <Line data={data} options={options} />
        </div>
    )
}
