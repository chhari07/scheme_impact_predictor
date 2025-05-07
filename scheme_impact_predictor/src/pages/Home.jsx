import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

const dummyData = [
  { name: 'Education', impact: 85 },
  { name: 'Health', impact: 70 },
  { name: 'Employment', impact: 90 },
  { name: 'Agriculture', impact: 60 },
];

const COLORS = ['#22c55e', '#facc15', '#3b82f6', '#ec4899'];

const Home = () => {
  return (
    <section className="home-section">
      {/* Text Section */}
      <div className="text-section">
        <motion.h1
          className="title"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Scheme Impact{' '}
          <span className="highlighted-text">Predictor</span>
        </motion.h1>

        <motion.p
          className="description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Understand how government schemes are likely to perform based on predictive analytics.
          Use data-driven insights to forecast societal impact in areas like healthcare, education, and employment.
        </motion.p>

        <div className="button-group">
   
          <NavLink to="/Dashboard" className="btn-dashboard">Dashboard</NavLink>
        </div>
      </div>

      {/* Charts Section */}
      <div className="charts-section">
        {/* Bar Chart */}
        <div className="chart-card">
          <h2 className="chart-title">Bar Chart</h2>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={dummyData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="impact" radius={[6, 6, 0, 0]}>
                  {dummyData.map((entry, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Line Chart */}
        <div className="chart-card">
          <h2 className="chart-title">Line Chart</h2>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={dummyData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="impact"
                  stroke="#16a34a"
                  strokeWidth={3}
                  dot={{ stroke: '#16a34a', strokeWidth: 2, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pie Chart */}
        <div className="chart-card">
          <h2 className="chart-title">Pie Chart</h2>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Tooltip />
                <Legend />
                <Pie
                  data={dummyData}
                  dataKey="impact"
                  nameKey="name"
                  outerRadius={80}
                  label
                >
                  {dummyData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <style jsx>{`
        .home-section {
          background-color: white;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 3rem 1rem;
        }

        .text-section {
          max-width: 1200px;
          width: 100%;
          margin-bottom: 4rem;
          margin-top: 6rem;
          text-align: center;
        }

        .title {
          font-size: 2rem;
          font-weight: 800;
          color: #333;
        }

        .highlighted-text {
          background-image: linear-gradient(to right, #22c55e, #16a34a);
          -webkit-background-clip: text;
          color: transparent;
        }

        .description {
          margin-top: 1rem;
          color: #4a4a4a;
          font-size: 1.125rem;
        }

        .button-group {
          margin-top: 2rem;
          display: flex;
          justify-content: center;
          gap: 1rem;
        }

        .btn-login, .btn-register, .btn-dashboard {
          padding: 0.75rem 1.5rem;
          border-radius: 0.375rem;
          font-size: 1.125rem;
          text-align: center;
          text-decoration: none;
        }

        .btn-login {
          background-color: #2563eb;
          color: white;
        }

        .btn-login:hover {
          background-color: #1d4ed8;
        }

        .btn-register {
          background-color: #000000;
          color: white;
        }

        .btn-register:hover {
          background-color: #22c55e;
        }

        .btn-dashboard {
          background-color: #000000;
          color: white;
        }

        .btn-dashboard:hover {
          background-color: #22c55e;
        }

        .charts-section {
          display: flex;
          gap: 1.5rem;
          overflow-x: auto;
          margin-top: 4rem;
        }

        .chart-card {
          min-width: 320px;
          background-color: #f9fafb;
          padding: 1rem;
          border-radius: 0.5rem;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .chart-title {
          text-align: center;
          font-weight: 600;
          font-size: 1.125rem;
          color: #4a4a4a;
          margin-bottom: 0.5rem;
        }

        .chart-container {
          height: 280px;
        }
      `}</style>
    </section>
  );
};

export default Home;
