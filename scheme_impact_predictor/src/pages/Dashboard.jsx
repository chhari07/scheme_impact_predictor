import React, { useEffect, useState, useRef } from "react";
import { Line } from "react-chartjs-2";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import "leaflet/dist/leaflet.css";
import "./Dashboard.css"; // Correct path for CSS import
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const [schemes, setSchemes] = useState([]);
  const [selectedScheme, setSelectedScheme] = useState("");
  const [form, setForm] = useState({});
  const [monthlyData, setMonthlyData] = useState([]);
  const [stateData, setStateData] = useState([]);
  const chartRef = useRef(null);
  const mapContainerRef = useRef(null);

  const pointStyles = [
    "circle", "rect", "triangle", "rectRounded", "rectRot",
    "cross", "crossRot", "star", "line", "dash",
  ];

  useEffect(() => {
    const fetchSchemes = async () => {
      try {
        const response = await fetch("https://chhari07.github.io/scheme_impact_data/data.json");
        const data = await response.json();
        setSchemes(data);
        if (data.length > 0) setSelectedScheme(data[0].name);
      } catch (error) {
        console.error("Error fetching schemes:", error);
      }
    };
    fetchSchemes();
  }, []);

  useEffect(() => {
    const fetchData = () => {
      const scheme = schemes.find(s => s.name === selectedScheme);
      if (scheme) {
        setForm(scheme);
        setMonthlyData(scheme.monthlyImpact || []);
        setStateData(scheme.stateImpact || []);
      }
    };
    if (selectedScheme) fetchData();
  }, [selectedScheme, schemes]);

  const graphData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Compensation Distribution (in Crores)",
        data: monthlyData,
        fill: false,
        borderColor: "#3b82f6",
        backgroundColor: "#3b82f6",
        tension: 0.4,
        pointStyle: monthlyData.map((_, i) => pointStyles[i % pointStyles.length]),
        pointRadius: 5,
        pointHoverRadius: 6,
      },
    ],
  };

  const generatePDF = async () => {
    const doc = new jsPDF("p", "mm", "a4");

    let y = 20;
    doc.setFontSize(16);
    doc.text(form.name || "Scheme", 10, y);
    y += 10;

    doc.setFontSize(12);
    const fields = [
      "category", "audience", "budget", "impact", "coverage", "duration",
      "eligibility", "agency", "objectives", "status", "link"
    ];

    fields.forEach((field) => {
      if (form[field]) {
        doc.text(`${field.charAt(0).toUpperCase() + field.slice(1)}: ${form[field]}`, 10, y);
        y += 10;
      }
    });

    if (chartRef.current) {
      const chartCanvas = chartRef.current.querySelector("canvas");
      const chartImage = await html2canvas(chartCanvas);
      doc.addImage(chartImage.toDataURL("image/png"), "PNG", 10, y, 180, 50);
      y += 60;
    }

    if (mapContainerRef.current) {
      const mapImage = await html2canvas(mapContainerRef.current);
      doc.addImage(mapImage.toDataURL("image/png"), "PNG", 10, y, 180, 50);
    }

    doc.save(`${form.name || "Scheme"}_Report.pdf`);
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1 className="title">PMFBY Dashboard</h1>
        <p className="subtitle">Monitoring Scheme Impact Across India</p>
      </header>

      <div className="scheme-selector">
        <label htmlFor="schemeSelect" className="label">Select Scheme</label>
        <select
          id="schemeSelect"
          value={selectedScheme}
          onChange={(e) => setSelectedScheme(e.target.value)}
          className="select"
        >
          {schemes.map((scheme) => (
            <option key={scheme.name} value={scheme.name}>
              {scheme.name}
            </option>
          ))}
        </select>
      </div>

      <div className="scheme-details">
        <h2>Scheme Details</h2>
        <div className="details-grid">
          {Object.entries(form).map(([key, value]) => (
            key !== "monthlyImpact" && key !== "stateImpact" && (
              <div key={key} className="detail-item">
                <label className="detail-label">{key.replace(/([A-Z])/g, " $1")}:</label>
                <input
                  type="text"
                  value={value}
                  readOnly
                  className="detail-input"
                />
              </div>
            )
          ))}
        </div>
      </div>

      <div ref={chartRef} className="chart-container">
        <h2>Monthly Impact Graph</h2>
        <Line data={graphData} />
      </div>

      <div ref={mapContainerRef} className="map-container">
        <h2>State-wise Coverage Map</h2>
        <MapContainer center={[23.5937, 80.9629]} zoom={4} style={{ height: "300px", width: "100%" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="© OpenStreetMap contributors"
          />
          {stateData.map((state, index) => (
            state.coordinates && state.coordinates.lat && state.coordinates.lng && (
              <Marker key={index} position={[state.coordinates.lat, state.coordinates.lng]}>
                <Popup>
                  <strong>{state.state}</strong><br />
                  Coverage: {state.coverage}
                </Popup>
              </Marker>
            )
          ))}
        </MapContainer>
      </div>

      <div className="download-btn-container">
        <button
          onClick={generatePDF}
          className="download-btn"
        >
          Download PDF Report
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
