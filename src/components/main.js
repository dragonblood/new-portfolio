import React, { useState } from 'react';
import { Mail, Linkedin, Github, Phone, MapPin, Copy, Check } from 'lucide-react';

import one from '../assets/images/Atlus.png'; 
import two from '../assets/images/Boomerang.png';
import three from '../assets/images/Cataract.png'; 
import five from '../assets/images/Login.png'; 
import four from '../assets/images/eridium.png'; 


import './main.css';

const SmoothScrollWebsite = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === 'email') {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
      } else if (type === 'phone') {
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2000);
      }
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div className="scroll-container">
      <section id="home" className="screen">
        <div className="screen-content text-center">
          <h1 className="title">
            <span className="block">Hi</span>
            <br />
            <span className="block">I'm Vipul</span>
          </h1>
          <p className="subtitle">
            Cloud Architect and PLM consultant
          </p>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="screen">
        <div className="screen-content">
          <h1 className="title text-center">Experience</h1>

          {/* Entry 1: Current (KONE) */}
          <div className="neumorphic-card">
              <h2 className="content-title">Lead Cloud Architect</h2>
              <p style={{ fontWeight: 600 }}>Seligent Consulting (Client: KONE R&D) | 2024 - Present</p>
            
            <ul className="job-list">
              <li><strong>Legacy Migration:</strong> Leading the migration of a legacy Windows Service drawing generation system (FLCAD) to a modern, event-driven serverless architecture on AWS.</li>
              <li><strong>Architecture Design:</strong> Architected a modular, reusable validation framework using AWS Lambda, Step Functions, and S3. This design allowed subsequent integrations to reuse 90% of core components, significantly accelerating development velocity.</li>
              <li><strong>DevOps Standardization:</strong> Standardized environment replication for Dev/QA/Prod using AWS CloudFormation (IaC) and GitHub Actions, ensuring consistent deployments across all stages.</li>
              <li><strong>Security & Optimization:</strong> Secured network infrastructure by designing isolated VPCs with strict Security Group protocols. Optimized cloud expenditure by replacing always-on compute with on-demand serverless components, drastically reducing monthly burn rates.</li>
            </ul>
          </div>
<br /><br />
          {/* Entry 2: Previous (Alstom/Delaval) */}
          <div className="neumorphic-card">
              <h2 className="content-title">PLM Developer & Consultant</h2>
              <p style={{ fontWeight: 600 }}>Seligent Consulting (Clients: Alstom, Delaval) | Nov 2021 - 2024</p>
            <ul className="job-list">
              <li><strong>Aras Migration:</strong> Managed migration from Aras v22 to v27 for Delaval and assisted with complex Aras-SAP integrations for Alstom.</li>
              <li><strong>Secure API Development:</strong> Developed "Hydra," a highly customized configuration for Alstom. Built a secure API wrapper using ASP.NET to extend functionality and allow secure, flexible user access.</li>
              <li><strong>Integration & Orchestration:</strong> Implemented Aras-Orchestra integrations utilizing secure SFTP file transfers.</li>
              <li><strong>Compliance Systems:</strong> Developed a Proof of Concept (POC) to handle European environmental compliance via ECHA APIs. Automated the registration of dossiers in the SCIP database and visualized compliance status directly within Aras.</li>
              <li><strong>Client Interface:</strong> Built a complete ReactJS interface for US-based clients, handling all requirement gathering and direct communication.</li>
            </ul>
          </div>

          {/* Entry 3: Intern
          <div className="neumorphic-card full-width">
            <div className="job-header">
              <h2 className="content-title-small">Summer Intern</h2>
              <p className="job-sub">Cojag Smart Technology | Jun 2019 - Jul 2019</p>
            </div>
            <ul className="job-list simple-list">
              <li>Collaborated with the analytics team to visualize data and assisted in planning tech infrastructure for local government schools.</li>
            </ul>
          </div> */}

        </div>
      </section>


            <section id="about" className="screen">
        <div className="screen-content">
          <h1 className="title text-center">about me</h1>
          <div className="about-grid">
            <div className="neumorphic-card technical-skills-card">
              <h2 className="content-title">Technical Skills</h2>
              <div className="skills-grid">
                <div className="skill-category">
                  <h3>DevOps & Cloud</h3>
                  <ul>
                    <li>AWS</li>
                    <li>Linux</li>
                    <li>Cloud migration</li>
                    <li>Cloud formation and CDK script</li>
                    <li>GIT/Github</li>
                    <li>Google Cloud Platform</li>
                  </ul>
                </div>
                <div className="skill-category">
                  <h3>Frontend</h3>
                  <ul>
                    <li>HTML</li>
                    <li>Figma</li>
                    <li>CSS</li>
                    <li>SCSS</li>
                    <li>React.js</li>
                    <li>Bootstrap</li>
                  </ul>
                </div>
                <div className="skill-category">
                  <h3>Backend</h3>
                  <ul>
                    <li>C#</li>
                    <li>ASP.Net</li>
                    <li>.NET</li>
                    <li>Django</li>
                    <li>Python</li>
                    <li>SQL</li>
                    <li>REST APIs</li>
                    <li>Entity Framework</li>
                  </ul>
                </div>
                <div className="skill-category">
                  <h3>PLM</h3>
                  <ul>
                    <li>Aras PLM 12, 14, 22</li>
                    <li>Aras customization</li>
                    <li>Aras configuration</li>
                    <li>Aras custom module developement</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="neumorphic-card">
              <h2 className="content-title">Certification & Education</h2>
              <p><strong>Bachelor's Degree in Computer Technology</strong></p>
              <p>K.D.K College of Engineering (2017 - 2021)</p>
              <p>Final Year CGPA: 9.39</p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="screen projects-section-container">
        <h1 className="title projects-title">projects</h1>
        <div className="screen-content projects-content-wrapper">
          <div className="project-grid">
            <div className="project-card">
              <img src={one} alt="Project Screenshot" className="project-screenshot" />
              <div className="project-content">
                <h2 className="project-title">Employee Mental health Checker</h2>
                <p>A WebApp built using Django which uses ML to predict whether an employee needs mental health treatment.</p>
                <a href="https://vipulatlus.herokuapp.com" target="_blank" rel="noopener noreferrer">View Project</a>
              </div>
            </div>
            <div className="project-card">
              <img src={four} alt="Project Screenshot" className="project-screenshot" />
              <div className="project-content">
                <h2 className="project-title">AI AutoDubbing</h2>
                <p>Automated AI-assisted dubbing system that parses, transcribes, translates, and converts video audio to speech.</p>
                <a href="https://github.com/dragonblood/Eridium" target="_blank" rel="noopener noreferrer">View Source</a>
              </div>
            </div>
            <div className="project-card">
              <img src={two} alt="Project Screenshot" className="project-screenshot" />
              <div className="project-content">
                <h2 className="project-title">Sentiment and Entity Analyser</h2>
                <p>A parachuting-themed responsive analyzer using Google's Natural Language API to process and visualize user-given text.</p>
                <a href="http://boomerang.vipulpetkar.me/" target="_blank" rel="noopener noreferrer">View Project</a>
              </div>
            </div>
            <div className="project-card">
              <img src={three} alt="Project Screenshot" className="project-screenshot" />
              <div className="project-content">
                <h2 className="project-title">Neumorphic Image Tagging</h2>
                <p>A web app designed with neuromorphic principles to analyze user-uploaded images stored in Azure Blob Storage.</p>
                <a href="https://cataract.azurewebsites.net" target="_blank" rel="noopener noreferrer">View Project</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="screen">
        <div className="screen-content">
          <h1 className="title text-center">contact me</h1>
          <p className="subtitle text-center">
            Ready to bring your ideas to life? Drop me a line and let's create something amazing together.
          </p>
          <div className="contact-grid">
            <div className="neumorphic-card contact-card">
              <h2 className="content-title text-center">get in touch</h2>
              <div className="contact-details-container">
                {/* Email */}
                <div className="contact-info-item" onClick={() => copyToClipboard('Petkar.vipul@gmail.com', 'email')}>
                  <div className="contact-icon-wrapper"><Mail size={20} /></div>
                  <div className="contact-text-wrapper">
                    <p className="contact-label">Email</p>
                    <p className="contact-value">Petkar.vipul@gmail.com</p>
                  </div>
                  <div className="copy-icon-wrapper">
                    {copiedEmail ? <Check size={20} className="text-green" /> : <Copy size={20} />}
                  </div>
                </div>

                {/* Phone */}
                <div className="contact-info-item" onClick={() => copyToClipboard('+918999540311', 'phone')}>
                  <div className="contact-icon-wrapper"><Phone size={20} /></div>
                  <div className="contact-text-wrapper">
                    <p className="contact-label">Phone</p>
                    <p className="contact-value">+91 899 954 0311</p>
                  </div>
                  <div className="copy-icon-wrapper">
                    {copiedPhone ? <Check size={20} className="text-green" /> : <Copy size={20} />}
                  </div>
                </div>

                {/* Location */}
                <div className="contact-info-item non-clickable">
                  <div className="contact-icon-wrapper"><MapPin size={20} /></div>
                  <div className="contact-text-wrapper">
                    <p className="contact-label">Location</p>
                    <p className="contact-value">Nagpur, Maharashtra, IN</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="social-links-container">
                <a href="https://www.linkedin.com/in/vipul-petkar" target="_blank" rel="noopener noreferrer" className="social-button">
                  <Linkedin size={24} />
                </a>
                <a href="https://github.com/dragonblood" target="_blank" rel="noopener noreferrer" className="social-button">
                  <Github size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SmoothScrollWebsite;