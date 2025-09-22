import React, { useState } from "react";
import "./style.css";

export const Desktop = () => {
  const [activeTab, setActiveTab] = useState("Home");

  const handleHireMe = () => {
    // Open Google Form for hiring inquiries
    window.open("https://forms.gle/D277vum7pApTjJLg8", "_blank");
  };

  const handleDownloadResume = () => {
    // Create a dummy resume download
    const link = document.createElement('a');
    link.href = 'data:text/plain;charset=utf-8,Mukund\'s Resume - Developer & Data Analyst';
    link.download = 'Mukund_Resume.txt';
    link.click();
  };

  const handleGmail = () => {
    window.open("https://mail.google.com/mail/?view=cm&fs=1&to=mukundwankhade1234@gmail.com.com&su=Portfolio Contact&body=Hi Mukund,", "_blank");
  };

  const renderContent = () => {
    switch(activeTab) {
      case "Skills":
        return (
          <div className="skills-content">
            <h2 className="skills-title">My Skills</h2>
            
            <div className="skills-category">
              <h3 className="category-title">Programming Languages</h3>
              <div className="skills-grid">
                <div className="skill-item">
                  <img src="https://c.animaapp.com/hJOoXkax/img/group@2x.png" alt="JavaScript" />
                  <span>JavaScript</span>
                </div>
                <div className="skill-item">
                  <img src="https://c.animaapp.com/hJOoXkax/img/image-1@2x.png" alt="Python" />
                  <span>Python</span>
                </div>
              
                <div className="skill-item">
                  <div className="skill-icon cpp">⚡</div>
                  <span>C++</span>
                </div>
                <div className="skill-item">
                  <div className="skill-icon sql">🗃️</div>
                  <span>SQL</span>
                </div>
              </div>
            </div>

            <div className="skills-category">
              <h3 className="category-title">Web Development</h3>
              <div className="skills-grid">
                <div className="skill-item">
                  <img src="https://c.animaapp.com/hJOoXkax/img/vscode-icons-file-type-html.svg" alt="HTML5" />
                  <span>HTML5</span>
                </div>
                <div className="skill-item">
                  <img src="https://c.animaapp.com/hJOoXkax/img/skill-icons-css.svg" alt="CSS3" />
                  <span>CSS3</span>
                </div>
                <div className="skill-item">
                  <img src="https://c.animaapp.com/hJOoXkax/img/favpng-ff3446a4dba6c7655456925a15d4b806-1@2x.png" alt="React" />
                  <span>React</span>
                </div>
              </div>
            </div>

            <div className="skills-category">
              <h3 className="category-title">Data Analysis</h3>
              <div className="skills-grid">
                <div className="skill-item">
                  <div className="skill-icon pandas">🐼</div>
                  <span>Pandas</span>
                </div>
                <div className="skill-item">
                  <div className="skill-icon numpy">🔢</div>
                  <span>NumPy</span>
                </div>
                <div className="skill-item">
                  <div className="skill-icon matplotlib">📊</div>
                  <span>Matplotlib</span>
                </div>
                <div className="skill-item">
                  <div className="skill-icon seaborn">📈</div>
                  <span>Seaborn</span>
                </div>
                <div className="skill-item">
                  <div className="skill-icon excel">📊</div>
                  <span>Excel</span>
                </div>
                <div className="skill-item">
                  <div className="skill-icon powerbi">📈</div>
                  <span>Power BI</span>
                </div>
              </div>
            </div>

            <div className="skills-category">
              <h3 className="category-title">Databases</h3>
              <div className="skills-grid">
                <div className="skill-item">
                  <img src="https://c.animaapp.com/hJOoXkax/img/f1ff42686876d6ebf42039ed196d2c3f-1@2x.png" alt="MySQL" />
                  <span>MySQL</span>
                </div>
              </div>
            </div>

            <div className="skills-category">
              <h3 className="category-title">Tools & Technologies</h3>
              <div className="skills-grid">
                <div className="skill-item">
                  <div className="skill-icon git">🌿</div>
                  <span>Git</span>
                </div>
                <div className="skill-item">
                  <div className="skill-icon vscode">💻</div>
                  <span>VS Code</span>
                </div>
                <div className="skill-item">
                  <div className="skill-icon jupyter">📓</div>
                  <span>Jupyter</span>
                </div>
                <div className="skill-item">
                  <div className="skill-icon aws">☁️</div>
                  <span>AWS</span>
                </div>
                <div className="skill-item">
                  <div className="skill-icon figma">🎨</div>
                  <span>Figma</span>
                </div>
              </div>
            </div>

            <div className="skills-category">
              <h3 className="category-title">Soft Skills</h3>
              <div className="skills-grid">
                <div className="skill-item">
                  <div className="skill-icon problem">🧩</div>
                  <span>Problem Solving</span>
                </div>
                <div className="skill-item">
                  <div className="skill-icon team">🤝</div>
                  <span>Team Collaboration</span>
                </div>
                <div className="skill-item">
                  <div className="skill-icon communication">💬</div>
                  <span>Communication</span>
                </div>
                <div className="skill-item">
                  <div className="skill-icon project">📋</div>
                  <span>Project Management</span>
                </div>
              </div>
            </div>
          </div>
        );
      case "Connect":
        return (
          <div className="connect-content">
            <h2 className="connect-title">Let's Connect</h2>
            <p className="connect-subtitle">Ready to collaborate? Let's build something amazing together!</p>
            
            <div className="connect-grid">
              <div className="connect-card primary" onClick={handleGmail}>
                <div className="connect-icon">📧</div>
                <h3>Email Me</h3>
                <p>Drop me a line anytime</p>
                <span className="connect-link">mukundwankhade1234@gmail.com</span>
              </div>
              
              <div className="connect-card" onClick={() => window.open("https://www.linkedin.com/in/mukund-wankhade-137796317/", "_blank")}>
                <div className="connect-icon">💼</div>
                <h3>LinkedIn</h3>
                <p>Professional network</p>
                <span className="connect-link">Connect with me</span>
              </div>
              
              <div className="connect-card" onClick={() => window.open("https://github.com/Mukund2417", "_blank")}>
                <div className="connect-icon">🐙</div>
                <h3>GitHub</h3>
                <p>Check out my code</p>
                <span className="connect-link">View repositories</span>
              </div>
              
              <div className="connect-card" onClick={() => window.open("https//x.com", "_blank")}>
                <div className="connect-icon">❌</div>
                <h3>X</h3>
                <p>Follow my journey</p>
                <span className="connect-link">Mukund Wankhade</span>
              </div>
            </div>

            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">🌍</div>
                <div>
                  <h4>Location</h4>
                  <p>Available Worldwide (Remote)</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">📱</div>
                <div>
                  <h4>Phone</h4>
                  <p>+918421818543</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">⏰</div>
                <div>
                  <h4>Response Time</h4>
                  <p>Usually within 24 hours</p>
                </div>
              </div>
            </div>

            <div className="availability-status">
              <div className="status-indicator"></div>
              <span>Available for new projects</span>
            </div>
          </div>
        );
      default:
        return (
          <div className="home-content">
            <p className="hey-i-am-mukund animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <span className="span">Hey , I am</span>
              <span className="text-wrapper-4">&nbsp;</span>
              <span className="text-wrapper-5">Mukund..</span>
            </p>

            <div className="text-wrapper-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>Developer</div>
            <div className="text-wrapper-7 animate-slide-up" style={{ animationDelay: '0.3s' }}>Data Analyst</div>
            <div className="text-wrapper-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>&</div>

            <p className="transforming-data animate-slide-up" style={{ animationDelay: '0.5s' }}>
              "Transforming data into insights and ideas into code."
            </p>

            <div className="home-buttons animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <div className="div-wrapper" onClick={handleHireMe}>
                <div className="text-wrapper-9">Hire me</div>
              </div>

              <div className="gmail-button" onClick={handleGmail}>
                <img
                  className="gmail-icon"
                  alt="Gmail"
                  src="https://c.animaapp.com/hJOoXkax/img/image-2@2x.png"
                />
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="desktop" data-model-id="1:2">
      <img
        className="ellipse"
        alt="Ellipse"
        src="https://c.animaapp.com/hJOoXkax/img/ellipse-1.svg"
      />

      <div className="text-wrapper">Mukund.</div>

      <div className="frame">
        <div 
          className={`nav-item ${activeTab === "Home" ? "active" : ""}`}
          onClick={() => setActiveTab("Home")}
        >
          Home
        </div>

        <div 
          className={`nav-item ${activeTab === "Skills" ? "active" : ""}`}
          onClick={() => setActiveTab("Skills")}
        >
          Skills
        </div>

        <div 
          className={`nav-item ${activeTab === "Connect" ? "active" : ""}`}
          onClick={() => setActiveTab("Connect")}
        >
          Connect
        </div>
      </div>

      <div className="frame-2" onClick={handleDownloadResume}>
        <img
          className="solar-file-download"
          alt="Solar file download"
          src="https://c.animaapp.com/hJOoXkax/img/solar-file-download-bold.svg"
        />

        <div className="download-resume">
          Download <br />
          Resume
        </div>
      </div>

      {/* Rotating rings positioned behind the man */}
      <div className="rings-container">
        <div className="ellipse-2 rotating-ring"></div>
        <div className="ellipse-3 rotating-ring"></div>
        <div className="ellipse-4 rotating-ring"></div>
      </div>

      <div className="content-area">
        {renderContent()}
      </div>

      <img
        className="adobe-express-file"
        alt="Profile"
        src="https://c.animaapp.com/hJOoXkax/img/adobe-express---file--5--5.png"
      />

      <img
        className="adobe-express-file-2"
        alt="Decoration"
        src="https://c.animaapp.com/hJOoXkax/img/adobe-express---file--6--6.png"
      />

      <img
        className="adobe-express-file-3"
        alt="Decoration"
        src="https://c.animaapp.com/hJOoXkax/img/adobe-express---file--6--7@2x.png"
      />
    </div>
  );
};
