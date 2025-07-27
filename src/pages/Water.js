// // import React from 'react';

// // function Water() {
// //   return (
// //     <div style={{ padding: '20px' }}>
// //       <h2>Water Tracker</h2>
// //       <p>Monitor your water intake throughout the day.</p>
// //     </div>
// //   );
// // }

// // export default Water;


// import React, { useState } from "react";

// const Water = () => {
//   const [waterIntake, setWaterIntake] = useState(0);
//   const [history, setHistory] = useState([]);

//   const addWater = (amount) => {
//     const newIntake = waterIntake + amount;
//     setWaterIntake(newIntake);
//     setHistory([...history, { time: new Date().toLocaleTimeString(), amount }]);
//   };

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         backgroundColor: "#e8f5e9",
//         padding: "40px 20px",
//         fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//         color: "#2c3e50",
//       }}
//     >
//       <h1
//         style={{
//           textAlign: "center",
//           marginBottom: "20px",
//           fontWeight: "700",
//           fontSize: "2.5rem",
//           color: "#2e7d32",
//         }}
//       >
//         💧 Water Tracker
//       </h1>

//       <div
//         style={{
//           maxWidth: 400,
//           margin: "0 auto",
//           background: "#ffffff",
//           padding: "30px",
//           borderRadius: "16px",
//           boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
//         }}
//       >
//         <h2 style={{ textAlign: "center", color: "#388e3c" }}>
//           Total Intake: {waterIntake} ml
//         </h2>

//         <div style={{ display: "flex", justifyContent: "space-around", marginTop: "20px" }}>
//           {[200, 300, 500].map((amount) => (
//             <button
//               key={amount}
//               onClick={() => addWater(amount)}
//               style={{
//                 padding: "10px 20px",
//                 backgroundColor: "#a5d6a7",
//                 border: "none",
//                 borderRadius: "10px",
//                 cursor: "pointer",
//                 fontSize: "1rem",
//                 transition: "background 0.3s",
//               }}
//               onMouseOver={(e) => (e.target.style.backgroundColor = "#81c784")}
//               onMouseOut={(e) => (e.target.style.backgroundColor = "#a5d6a7")}
//             >
//               +{amount}ml
//             </button>
//           ))}
//         </div>

//         <h3 style={{ marginTop: "30px", color: "#2e7d32" }}>Intake History</h3>
//         <ul style={{ listStyle: "none", padding: 0 }}>
//           {history.map((entry, idx) => (
//             <li
//               key={idx}
//               style={{
//                 backgroundColor: "#c8e6c9",
//                 margin: "10px 0",
//                 padding: "10px 15px",
//                 borderRadius: "8px",
//               }}
//             >
//               {entry.time}: {entry.amount} ml
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Water;

// import React, { useState } from "react";

// const Water = () => {
//   const [glasses, setGlasses] = useState(0);
//   const totalGlasses = 8;

//   const addGlass = () => {
//     if (glasses < totalGlasses) {
//       setGlasses(glasses + 1);
//     }
//   };

//   const resetGlasses = () => {
//     setGlasses(0);
//   };

//   const progressPercentage = (glasses / totalGlasses) * 100;

//   return (
//     <div style={styles.container}>
//       <h1 style={styles.heading}>💧 Daily Water Intake Tracker</h1>
//       <p style={styles.subheading}>
//         Drinking enough water is essential for optimal health and fitness.
//       </p>

//       <div style={styles.trackerBox}>
//         <h2 style={{ color: "#2e7d32" }}>Today's Progress: {glasses} / {totalGlasses} glasses</h2>
//         <div style={styles.progressBar}>
//           <div style={{ ...styles.progressFill, width: `${progressPercentage}%` }}></div>
//         </div>

//         <div style={styles.buttonGroup}>
//           <button style={styles.button} onClick={addGlass}>+ Add Glass</button>
//           <button style={styles.resetButton} onClick={resetGlasses}>Reset</button>
//         </div>
//       </div>

//       <div style={styles.infoSection}>
//         <h3 style={{ color: "#1b5e20" }}>💡 Why Stay Hydrated?</h3>
//         <ul style={styles.list}>
//           <li>Boosts metabolism and energy levels</li>
//           <li>Improves brain function and mood</li>
//           <li>Helps in weight management</li>
//           <li>Flushes out toxins from the body</li>
//           <li>Keeps skin healthy and glowing</li>
//         </ul>
//       </div>

//       <div style={styles.tipsBox}>
//         <h3>Hydration Tips 💦</h3>
//         <ul>
//           <li>Start your day with a glass of water.</li>
//           <li>Drink before, during, and after exercise.</li>
//           <li>Carry a water bottle wherever you go.</li>
//           <li>Eat fruits like watermelon and oranges to boost hydration.</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     background: "linear-gradient(to right, #f1f8e9, #ffffff)",
//     minHeight: "100vh",
//     padding: "40px 20px",
//     fontFamily: "Segoe UI, sans-serif",
//     color: "#2e7d32",
//     textAlign: "center",
//   },
//   heading: {
//     fontSize: "2.5rem",
//     marginBottom: 10,
//   },
//   subheading: {
//     fontSize: "1.2rem",
//     marginBottom: 30,
//     color: "#4caf50",
//   },
//   trackerBox: {
//     backgroundColor: "white",
//     borderRadius: "15px",
//     padding: "30px",
//     maxWidth: "500px",
//     margin: "0 auto 40px auto",
//     boxShadow: "0 8px 20px rgba(46,125,50,0.15)",
//     transition: "all 0.3s ease",
//   },
//   progressBar: {
//     height: "20px",
//     backgroundColor: "#c8e6c9",
//     borderRadius: "10px",
//     margin: "20px 0",
//     overflow: "hidden",
//   },
//   progressFill: {
//     height: "100%",
//     backgroundColor: "#66bb6a",
//     borderRadius: "10px",
//     transition: "width 0.5s ease",
//   },
//   buttonGroup: {
//     display: "flex",
//     justifyContent: "center",
//     gap: "10px",
//     marginTop: "10px",
//   },
//   button: {
//     padding: "10px 20px",
//     backgroundColor: "#66bb6a",
//     color: "#fff",
//     border: "none",
//     borderRadius: "20px",
//     cursor: "pointer",
//     fontWeight: "600",
//   },
//   resetButton: {
//     padding: "10px 20px",
//     backgroundColor: "#ef5350",
//     color: "#fff",
//     border: "none",
//     borderRadius: "20px",
//     cursor: "pointer",
//     fontWeight: "600",
//   },
//   infoSection: {
//     maxWidth: "700px",
//     margin: "0 auto 40px auto",
//     background: "#ffffff",
//     padding: "30px",
//     borderRadius: "15px",
//     boxShadow: "0 8px 16px rgba(76,175,80,0.1)",
//   },
//   list: {
//     textAlign: "left",
//     paddingLeft: "20px",
//     fontSize: "1rem",
//     color: "#2e7d32",
//   },
//   tipsBox: {
//     maxWidth: "700px",
//     margin: "0 auto",
//     background: "#e8f5e9",
//     padding: "20px",
//     borderRadius: "10px",
//     fontSize: "1rem",
//     color: "#1b5e20",
//     boxShadow: "0 4px 8px rgba(46,125,50,0.1)",
//   },
// };

// export default Water;






import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const getTodayDate = () => new Date().toLocaleDateString();

const Water = () => {
  const [allIntake, setAllIntake] = useState(() => {
    const saved = localStorage.getItem("waterIntake");
    return saved ? JSON.parse(saved) : [];
  });

  const today = getTodayDate();
  const intake = allIntake.filter((entry) => entry.date === today);
  const glasses = intake.reduce((sum, entry) => sum + entry.amount, 0);

  useEffect(() => {
    localStorage.setItem("waterIntake", JSON.stringify(allIntake));
  }, [allIntake]);

  useEffect(() => {
    const reminder = setInterval(() => {
      alert("💧 Time to drink water and stay hydrated!");
    }, 1000 * 60 * 60 * 2);
    return () => clearInterval(reminder);
  }, []);

  const addGlass = () => {
    const newEntry = { time: new Date().toLocaleTimeString(), amount: 1, date: today };
    setAllIntake([...allIntake, newEntry]);
  };

  const chartData = {
    labels: intake.map((entry) => entry.time),
    datasets: [
      {
        label: "Water Intake (glasses)",
        data: intake.map((entry) => entry.amount),
        borderColor: "#1e88e5",
        backgroundColor: "rgba(30,136,229,0.2)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #bbdefb, #e3f2fd)",
        padding: "50px 20px",
        fontFamily: "Segoe UI, sans-serif",
        color: "#0d47a1",
      }}
    >
      <div
        style={{
          background: "white",
          borderRadius: "20px",
          boxShadow: "0 12px 24px rgba(13,71,161,0.2)",
          padding: "40px",
          maxWidth: "800px",
          margin: "0 auto",
          transition: "0.3s",
          position: "relative",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: 20 }}>💧 Water Tracker</h2>
        <p style={{ textAlign: "center" }}>
          Monitor your daily hydration and maintain a healthy habit.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 30,
            padding: "20px",
            backgroundColor: "#e3f2fd",
            borderRadius: "15px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.05)",
          }}
        >
          <h3>Glasses Drank Today: {glasses}</h3>
          <button
            onClick={addGlass}
            style={{
              padding: "10px 25px",
              border: "none",
              borderRadius: 10,
              backgroundColor: "#42a5f5",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#1e88e5")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#42a5f5")}
          >
            + Add Glass
          </button>
        </div>

        <div style={{ marginTop: 40 }}>
          <h4 style={{ marginBottom: 10 }}>Today's Intake Chart</h4>
          {intake.length > 0 ? (
            <Line data={chartData} />
          ) : (
            <p style={{ textAlign: "center", color: "gray" }}>
              No data yet. Start drinking water!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Water;