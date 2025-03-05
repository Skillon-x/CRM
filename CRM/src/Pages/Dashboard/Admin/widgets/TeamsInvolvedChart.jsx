import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const TeamsInvolvedChart = () => {
  // Chart Data
  const data = {
    labels: ["Sun", "Sun", "Sun", "Sun", "Sun"],
    datasets: [
      {
        label: "Dataset 1",
        data: [60, 40, 70, 30, 20],
        backgroundColor: "#FF6B6B",
        borderRadius: 5,
      },
      {
        label: "Dataset 2",
        data: [80, 50, 60, 20, 80],
        backgroundColor: "#FFD700",
        borderRadius: 5,
      },
    ],
  };

  // Chart Options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#C0C0C0",
        },
      },
      y: {
        grid: {
          color: "#FFFFFF20",
        },
        ticks: {
          color: "#C0C0C0",
          stepSize: 20,
        },
      },
    },
  };

  // Inline Styles
  const styles = {
    chartContainer: {
      backgroundColor: "#0D1B2A",
      padding: "20px",
      borderRadius: "15px",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
      width: "600px",
      margin: "auto",
    },
    chartHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "15px",
    },
    title: {
      color: "white",
      fontWeight: "bold",
      margin: "0",
    },
    chartControls: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },
    dropdown: {
      backgroundColor: "white",
      padding: "8px 12px",
      borderRadius: "10px",
      border: "none",
      fontSize: "14px",
      fontWeight: "bold",
      cursor: "pointer",
    },
    arrow: {
      color: "red",
      marginLeft: "5px",
    },
    menuButton: {
      background: "white",
      border: "none",
      fontSize: "20px",
      padding: "5px 10px",
      borderRadius: "10px",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.chartContainer}>
      <div style={styles.chartHeader}>
        <h3 style={styles.title}>Teams involved</h3>
        <div style={styles.chartControls}>
          <button style={styles.dropdown}>
            Weekly <span style={styles.arrow}>▼</span>
          </button>
          <button style={styles.menuButton}>⋮</button>
        </div>
      </div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default TeamsInvolvedChart;
