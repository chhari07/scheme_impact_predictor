import React from 'react';

const Features = () => {
  return (
    <>
      <style>
        {`
          .features-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 1.5rem;
            margin-top: 5rem;
            padding: 2.5rem 1rem;
          }

          @media (min-width: 640px) {
            .features-grid {
              padding-left: 1.5rem;
              padding-right: 1.5rem;
            }
          }

          @media (min-width: 768px) {
            .features-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          @media (min-width: 1024px) {
            .features-grid {
              grid-template-columns: repeat(3, 1fr);
              padding-left: 3rem;
              padding-right: 3rem;
            }
          }

          .feature-card {
            background: white;
            border-radius: 1rem;
            padding: 1.25rem;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            transition: box-shadow 0.3s ease;
          }

          .feature-card:hover {
            box-shadow: 0 8px 16px rgba(0,0,0,0.15);
          }

          .feature-title {
            font-size: 1.125rem;
            font-weight: 600;
            color: #1f2937;
            margin-bottom: 0.75rem;
          }

          @media (min-width: 640px) {
            .feature-title {
              font-size: 1.25rem;
            }
          }

          @media (min-width: 1024px) {
            .feature-title {
              font-size: 1.5rem;
            }
          }

          .feature-description {
            font-size: 0.875rem;
            color: #374151;
          }

          @media (min-width: 640px) {
            .feature-description {
              font-size: 1rem;
            }
          }
        `}
      </style>

      <div className="features-grid">
        {[
          {
            title: "Live Data Dashboard",
            description:
              "Our dashboard shows scheme data in real-time using graphs, charts, and maps. You can see updated information clearly and quickly.",
          },
          {
            title: "Export as PDF",
            description:
              "You can download scheme details or graphs as PDF files to save or share with others easily.",
          },
          {
            title: "Interactive Maps",
            description:
              "Our platform shows maps that you can zoom, click, and explore. It helps you understand which schemes are active in different areas.",
          },
          {
            title: "Easy Tools Used",
            description:
              "We used modern tools like React, Chart.js, and Leaflet to make the site fast and smooth.",
          },
        
          {
            title: "Trusted Data Source",
            description:
              "We collect all scheme data from trusted sources like official government APIs to ensure accuracy.",
          },
        ].map((feature, index) => (
          <div key={index} className="feature-card">
            <h2 className="feature-title">{feature.title}</h2>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Features;
