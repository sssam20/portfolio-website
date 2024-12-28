// Projects.js
import React from 'react';
import './Project.css';  // Import the external CSS file

const Projects = () => {
    const projectData = [
        {
            title: 'Sorting Visualizer',
            description: 'A Visualizer tool to visualize how sorting algorithms work',
            imgSrc: '../images/abou_4x.jpg',
            link:'https://github.com/sssam20/Sorting-Visualizer'
        },
        {
            title: 'E-commerce Chatbot',
            description: 'An AI-powered chatbot for seamless food ordering, offering personalized recommendations and easy checkout."',
            imgSrc: 'images/ecommerce_website.jpg',
            link:'https://github.com/sssam20/Dialogflow_chatbot'
        },
        {
            title: 'Personal Portfolio',
            description: 'A personal portfolio showcasing my projects, skills, and education, built with React and Bootstrap.',
            imgSrc: 'images/portfolio.jpg',
            link:'https://github.com/sssam20/portfolio-website'
        },
        {
            title: 'Music-Recommendation-using-emotion-detection',
            description: 'A music recommendation system that uses emotion detection to suggest songs matching the users mood, enhancing personalization and listening enjoyment.',
            imgSrc: 'images/portfolio.jpg',
            link:'https://github.com/sssam20/Music-Recommendation-using-emotion-detection'
        }
    ];

    return (
        <section className="projects">
            <h1>Projects</h1>
            <div className="project-list">
                {projectData.map((project, index) => (
                    <div key={index} className="project-card">
                        {/* <img src={project.imgSrc} alt={project.title} className="project-img" /> */}
                        <div className="project-details">
                            <h2> <a href={project.link}> {project.title}</a></h2>
                            <p>{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
