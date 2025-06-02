import React, { useState } from 'react';
import './App.css';
import profilePic from './assests/profile pic.jpg';



function App() {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className="App">
      <header className="header">
        <div className="profile-container">
          <img src={profilePic} alt="Sonika CV" className="profile-img" />
          <div className="profile-overlay">
            <div className="social-links">
              <a href="https://linkedin.com/in/sonika-c-v-67577b286" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="mailto:sonikacv14@gmail.com">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
        <h1>Sonika C V</h1>
        <p className="title">Data Analyst</p>
        <div className="summary-card">
          <p className="career-summary">CAREER SUMMARY</p>
          <p>Aspiring Data Analyst with expertise in data collection, analysis, and visualization. Proficient in Excel, SQL, Python, and tools like Tableau and Power BI. Strong ability to identify trends, optimize processes, and generate insightful reports. Eager to apply analytical skills in a dynamic environment.</p>
        </div>
      </header>

      <nav className="nav-menu">
        <button onClick={() => toggleSection('skills')}>Skills</button>
        <button onClick={() => toggleSection('experience')}>Experience</button>
        <button onClick={() => toggleSection('projects')}>Projects</button>
        <button onClick={() => toggleSection('education')}>Education</button>
        <button onClick={() => toggleSection('certifications')}>Certifications</button>
      </nav>

      <main className="main-content">
        <section className={`section ${activeSection === 'skills' ? 'active' : ''}`}>
          <h2 onClick={() => toggleSection('skills')}>
            <i className="fas fa-code"></i> Skills and Strengths
            <i className={`fas fa-chevron-${activeSection === 'skills' ? 'up' : 'down'}`}></i>
          </h2>
          <div className="section-content">
            <div className="skills-grid">
              <div className="skill-category">
                <h3>Technical Skills</h3>
                <ul>
                  <li>Microsoft Excel</li>
                  <li>SQL</li>
                  <li>Data Visualization</li>
                  <li>Data Cleaning</li>
                  <li>Machine Learning</li>
                  <li>Statistical Analysis</li>
                </ul>
              </div>
              <div className="skill-category">
                <h3>Programming</h3>
                <ul>
                  <li>Python</li>
                  <li>SQL</li>
                </ul>
              </div>
              <div className="skill-category">
                <h3>Tools</h3>
                <ul>
                  <li>Power BI</li>
                  <li>Excel</li>
                  <li>Project Jupyter</li>
                  <li>Tableau</li>
                </ul>
              </div>
              <div className="skill-category">
                <h3>Soft Skills</h3>
                <ul>
                  <li>Leadership</li>
                  <li>Teamwork</li>
                  <li>Problem Solving</li>
                  <li>Analytical Thinking</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className={`section ${activeSection === 'experience' ? 'active' : ''}`}>
          <h2 onClick={() => toggleSection('experience')}>
            <i className="fas fa-briefcase"></i> Professional Experience
            <i className={`fas fa-chevron-${activeSection === 'experience' ? 'up' : 'down'}`}></i>
          </h2>
          <div className="section-content">
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-date">JAN 2025 – MAR 2025</div>
                <div className="timeline-content">
                  <h3>DATA ANALYST (Intern)</h3>
                  <h4>MEGRON TECH</h4>
                  <p>Specializing in data analysis, visualization, and insights generation Skilled in SQL, Power BI, Grafana, and real-time data processing using RDS databases. Experienced in analyzing network performance data, creating interactive dashboards, and optimizing data workflows for improved decision-making.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={`section ${activeSection === 'projects' ? 'active' : ''}`}>
          <h2 onClick={() => toggleSection('projects')}>
            <i className="fas fa-project-diagram"></i> Projects
            <i className={`fas fa-chevron-${activeSection === 'projects' ? 'up' : 'down'}`}></i>
          </h2>
          <div className="section-content">
            <div className="projects-grid">
              <div className="project-card">
                <h3>Random Forest - Income Evaluation</h3>
                <ul>
                  <li>Predicted income levels using demographic data with the Random Forest algorithm.</li>
                  <li>Preprocessed data, encoded categorical variables, and split into training/testing sets.</li>
                  <li>Tuned model hyperparameters for better accuracy.</li>
                </ul>
                <div className="project-tech">
                  <span>Python</span>
                  <span>Scikit-learn</span>
                  <span>NumPy</span>
                  <span>Pandas</span>
                </div>
                <div className="project-result">
                  <strong>Achieved 90% accuracy</strong> in predicting whether an individual's income exceeds $50K/year.
                </div>
              </div>

              <div className="project-card">
                <h3>HR Analytics Using Raw Data from Google with Power BI</h3>
                <ul>
                  <li>Analyzed raw HR data from Google to identify trends in attrition, performance, and diversity.</li>
                  <li>Created interactive dashboards in Power BI to visualize key metrics.</li>
                  <li>Generated actionable insights that helped optimize HR processes.</li>
                </ul>
                <div className="project-tech">
                  <span>Power BI</span>
                  <span>Excel</span>
                </div>
              </div>

              <div className="project-card">
                <h3>Employee Management System Using SQL</h3>
                <ul>
                  <li>Designed and implemented a relational database to manage employee records.</li>
                  <li>Automated salary calculation and Performance evaluation through SQL queries.</li>
                  <li>Generated reports on employee performance and departmental distribution.</li>
                </ul>
                <div className="project-tech">
                  <span>MySQL</span>
                </div>
              </div>

              <div className="project-card">
                <h3>Driver Drowsiness Detection System</h3>
                <ul>
                  <li>Designed a real-time drowsiness detection system to alert drivers.</li>
                  <li>Leveraged OpenCV for facial recognition and TensorFlow/Keras for CNN model.</li>
                  <li>Integrated a webcam for live video feed and alert mechanisms.</li>
                </ul>
                <div className="project-tech">
                  <span>Python</span>
                  <span>OpenCV</span>
                  <span>TensorFlow</span>
                </div>
              </div>

              <div className="project-card">
                <h3> Retail Sales Dashboard</h3>
                <ul>
                  <li>Designed and developed an interactive Retail Sales Dashboard to analyze and visualize sales, employee performance, store operations, and product categories.</li>
                  <li>Utilized DAX (Data Analysis Expressions) for creating custom calculated measures and KPIs</li>
                  <li>Implemented KPIs including Total Sales, Total Stores, Bill Count, and Average Bill Value Sales by City, Sales by Employee, Sales Trends by Day Total Employees, Total Items, Total Suppliers Sales by Item, Sales by Category, Store Location Map, and Sales by Sub-Category</li>
                </ul>
                <div className="project-tech">
                  <span>Power BI</span>
                  <span>Excel</span>
                  <span>Dax</span>
                </div>
              </div>

              <div className="project-card">
                <h3>Heart Rate Monitoring System</h3>
                <ul>
                  <li>Developed a heart rate monitoring system using facial RGB color variations.</li>
                  <li>Implemented in Python with image processing techniques.</li>
                  <li>Used PyCharm as the primary development environment.</li>
                </ul>
                <div className="project-tech">
                  <span>Python</span>
                  <span>OpenCV</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={`section ${activeSection === 'education' ? 'active' : ''}`}>
          <h2 onClick={() => toggleSection('education')}>
            <i className="fas fa-graduation-cap"></i> Education
            <i className={`fas fa-chevron-${activeSection === 'education' ? 'up' : 'down'}`}></i>
          </h2>
          <div className="section-content">
            <div className="education-timeline">
              <div className="education-item">
                <div className="education-date">2020-2024</div>
                <div className="education-content">
                  <h3>B.E - Computer Science & Engineering</h3>
                  <h4>Karavali Institute of Technology, Mangalore</h4>
                  <p>CGPA: 7.8</p>
                </div>
              </div>
              <div className="education-item">
                <div className="education-date">2018-2020</div>
                <div className="education-content">
                  <h3>Pre-University Course</h3>
                  <h4>St Joseph's Girls PU College, Chikmagaluru</h4>
                  <p>Percentage: 86.66%</p>
                </div>
              </div>
              <div className="education-item">
                <div className="education-date">2017-2018</div>
                <div className="education-content">
                  <h3>SSLC</h3>
                  <h4>Town Mahila Samaj, Chikmagaluru</h4>
                  <p>Percentage: 82%</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={`section ${activeSection === 'certifications' ? 'active' : ''}`}>
  <h2 onClick={() => toggleSection('certifications')}>
    <i className="fas fa-certificate"></i> Training and Certifications
    <i className={`fas fa-chevron-${activeSection === 'certifications' ? 'up' : 'down'}`}></i>
  </h2>
  <div className="section-content">
    <div className="certifications-list">
      <div className="certification-item">
        <i className="fas fa-award"></i>
        <span>
          Deloitte Australia Data Analytics Job Simulation on Forage
        </span>
      </div>
      <div className="certification-item">
        <i className="fas fa-award"></i>
        <span>Data Analytics - Seventh Sense Talent Solution</span>
      </div>
      <div className="certification-item">
        <i className="fas fa-award"></i>
        <span>Machine Learning in Python - AiRobosoft Service and Product</span>
      </div>
      <div className="certification-item">
        <i className="fas fa-award"></i>
        <span>Python - Besant Technology</span>
      </div>
    </div>
  </div>
</section>

      </main>

      <footer className="footer">
        <div className="contact-info">
          <p>
            <i className="fas fa-envelope"></i> sonikacv14@gmail.com
          </p>
          <p>
            <i className="fab fa-linkedin"></i> linkedin.com/in/sonika-c-v-67577b286
          </p>
        </div>
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} Sonika C V. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;