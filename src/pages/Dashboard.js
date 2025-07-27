// import React from "react";
// import Card from "./Card";
// import GoalCard from "./GoalCard";
// import BMICalculator from "./BMICalculator";
// import Footer from "./Footer";  
// import "../styles/FitnessDashboard.css";


// export default function FitnessDashboard() {
//   return (
//     <div className="dashboard-container">
//       {/* <header className="dashboard-header">
//         <h1>FitTrack</h1>
//         <nav className="dashboard-nav">
//           <button>Dashboard</button>
//           <button>Workouts</button>
//           <button>Water</button>
//           <button>Profile</button>
//         </nav>
//       </header> */}

//       <main className="dashboard-main">
//         <h1>Hello, Bot!</h1>
//         <h3>Here's your fitness summary for today</h3>

//         <div className="summary-cards">
//           <Card title="Steps" value="5,243" icon="📈" />

//           <Card title="Calories" value="435" icon="🔥" />
//           <Card title="Active Time" value="45 min" icon="⏱️" />
//           <Card title="Heart Rate" value="72 bpm" icon="🫀" />
//         </div>





//         <div className="detail-cards">
//           <Card title="Step Counter" value="4,704 steps" subtitle="Daily Goal: 10,000 steps\n10000 steps to go!" icon="🦶"/>
//           <Card title="Water Intake" value="0/8" subtitle="8 more glasses to reach your daily goal!"icon="💧" />
//           <BMICalculator />
//         </div>



//         <div className="goal-cards">
//           <GoalCard title="Daily Steps" value="5,243 / 10,000" color="green" />
//           <GoalCard title="Weekly Workouts" value="3 / 5" color="blue" />
//           <GoalCard title="Weight Goal" value="76 / 70 kg" color="purple" />
//           <GoalCard title="Sleep Goal" value="6.5 / 8 hrs" color="red" />
//         </div>
//       </main>
//       <Footer/>
//     </div>
//   );
// }

// import React from 'react';

// function Dashboard() {
//   return (
//     <div className="dashboard-container">
//       <header className="dashboard-header">
//         <h1>FitTrack</h1>
//         <nav className="dashboard-nav">
//           <button>Dashboard</button>
//           <button>Workouts</button>
//           <button>Water</button>
//           <button>Profile</button>
//         </nav>
//       </header>

//       <main className="dashboard-main">
//         <h1>Hello, Bot!</h1>
//         <h3>Here's your fitness summary for today</h3>

//         <div className="summary-cards">
//           <Card title="Steps" value="5,243" icon="📈" />

//           <Card title="Calories" value="435" icon="🔥" />
//           <Card title="Active Time" value="45 min" icon="⏱️" />
//           <Card title="Heart Rate" value="72 bpm" icon="🫀" />
//         </div>





//         <div className="detail-cards">
//           <Card title="Step Counter" value="4,704 steps" subtitle="Daily Goal: 10,000 steps\n10000 steps to go!" icon="🦶"/>
//           <Card title="Water Intake" value="0/8" subtitle="8 more glasses to reach your daily goal!"icon="💧" />
//           <BMICalculator />
//         </div>



//         <div className="goal-cards">
//           <GoalCard title="Daily Steps" value="5,243 / 10,000" color="green" />
//           <GoalCard title="Weekly Workouts" value="3 / 5" color="blue" />
//           <GoalCard title="Weight Goal" value="76 / 70 kg" color="purple" />
//           <GoalCard title="Sleep Goal" value="6.5 / 8 hrs" color="red" />
//         </div>
//       </main>
//       <Footer/>
//     </div>
//   );
// }

// const cardStyle = {
//   padding: '15px',
//   border: '1px solid #ccc',
//   borderRadius: '8px',
//   width: '200px',
//   background: '#fff'
// };

// const inputStyle = {
//   marginTop: '8px',
//   marginBottom: '8px',
//   padding: '5px',
//   width: '90%'
// };

// const buttonStyle = {
//   padding: '5px 10px',
//   backgroundColor: '#00796B',
//   color: 'white',
//   border: 'none',
//   borderRadius: '4px'
// };

// export default Dashboard;


import React from "react";
import Card from "./Card";
import GoalCard from "./GoalCard";
import BMICalculator from "./BMICalculator";
import Footer from "./Footer";  
import "../styles/FitnessDashboard.css";

export default function FitnessDashboard() {
  return (
    <div className="dashboard-container" style={{ background: "#f0fff4", paddingBottom: "60px" }}>
      <main className="dashboard-main">
        <h1 style={{ color: "#2e7d32" }}>Hello, Bot!</h1>
        <h3 style={{ marginBottom: "30px" }}>Here's your fitness summary for today</h3>

        <div className="summary-cards">
          <Card title="Steps" value="5,243" icon="📈" />
          <Card title="Calories Burned" value="435 kcal" icon="🔥" />
          <Card title="Active Time" value="45 min" icon="⏱️" />
          <Card title="Heart Rate" value="72 bpm" icon="🫀" />
        </div>

        <div className="detail-cards">
          <Card
            title="Step Counter"
            value="4,704 steps"
            subtitle="Goal: 10,000 steps\nKeep going!"
            icon="🦶"
          />
          <Card
            title="Water Intake"
            value="4/8 glasses"
            subtitle="Stay hydrated!"
            icon="💧"
          />
          <BMICalculator />
        </div>

        <div className="goal-cards">
          <GoalCard title="Daily Steps" value="5,243 / 10,000" color="green" />
          <GoalCard title="Weekly Workouts" value="3 / 5" color="blue" />
          <GoalCard title="Weight Goal" value="76 / 70 kg" color="purple" />
          <GoalCard title="Sleep Goal" value="6.5 / 8 hrs" color="red" />
          <GoalCard title="Calories Target" value="435 / 2000 kcal" color="orange" />
        </div>

        <section className="report-section" style={{ marginTop: "40px" }}>
          <h2 style={{ color: "#2e7d32", marginBottom: "20px" }}>Workout Report</h2>
          <div className="report-details" style={{ background: "#e8f5e9", borderRadius: "12px", padding: "20px" }}>
            <p><strong>Duration:</strong> 45 mins</p>
            <p><strong>Calories Burned:</strong> 435 kcal</p>
            <p><strong>Difficulty:</strong> Moderate</p>
            <p><strong>Top Exercise:</strong> Jumping Jacks</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
