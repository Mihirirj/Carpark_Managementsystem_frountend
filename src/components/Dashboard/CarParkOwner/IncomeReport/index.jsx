import React, { useEffect, useState, useRef } from 'react';
import TopTitleBar from '../../../TopTitleBar';
import server from '../../../../config/apis/server';
import Chart from 'chart.js/auto';

const IncomeReport = () => {
    const [data, setData] = useState(null);
    const chartRef = useRef(null);

    function getIncomeReport() {
        server
            .get('/admin/get_analyse', {
                headers: { token: localStorage.getItem('token') },
            })
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        getIncomeReport();
    }, []);

    useEffect(() => {
        if (data) {
            renderChart();
        }
    }, [data]);

    function renderChart() {
        const ctx = chartRef.current.getContext('2d');

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: Object.keys(data),
                datasets: [
                    {
                        label: 'Income',
                        data: Object.values(data),
                        backgroundColor: ['#007bff', '#dc3545', '#6c757d', '#ffc107', '#28a745'],
                    },
                ],
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                    },
                },
            },
        });
    }

    if (!data) {
        return (
            <div>
                <TopTitleBar title="My income report" />
                <div className="p-5 bg-white rounded-xl mx-5 h-96">Loading...</div>
            </div>
        );
    }

    return (
        <div>
            <TopTitleBar title="My income report" />
            <div className="p-5 bg-white rounded-xl mx-5 h-96">
                <canvas ref={chartRef}></canvas>
            </div>
        </div>
    );
};

export default IncomeReport;
