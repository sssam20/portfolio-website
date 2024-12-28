// About.js
import React,{ useState,useEffect}from 'react';
import './About.css';  // Importing the external CSS file

const About = () => {
    const [showMoreMantra, setShowMoreMantra] = useState(false);
    const [showMoreNIT, setShowMoreNIT] = useState(false);
    return (
        <div>
            <main className='page'>
                <section className="firstn">
                    <img src="../images/about_4x.jpg" alt='profile'></img>
                </section>

                <section className="about">
                    <h1>About</h1>
                    <br />
                    <p>
                        A passionate Full Stack Software Developer 🚀 having experience in building web applications
                        with JavaScript, React.js, Node.js, React Native, and expertise in machine learning (ML) and artificial intelligence (AI).
                    </p>
                    <br />
                    <h1>Skills</h1>
                    <section className="skills">
                        <i className="devicon-html5-plain-wordmark colored"></i>
                        <i className="devicon-css3-plain-wordmark colored"></i>
                        <i className="devicon-javascript-plain colored"></i>
                        <i className="devicon-nodejs-plain colored"></i>
                        <i className="devicon-mongodb-plain-wordmark colored"></i>
                        <i className="devicon-express-original-wordmark colored"></i>
                        <i className="devicon-cplusplus-line-wordmark colored"></i>
                        <i className="devicon-pytorch-plain colored"></i>
                        <i className="devicon-tensorflow-original colored"></i>
                    </section>
                    <br />

                    <h1>Experience</h1>
            <br />
            <section className="experience">
                <div className="card" >
                    <div className="card-body">
                        <h5 className="card-title">Graduate Engineer Trainee - Computer Vision, Mantra Softech India Pvt Ltd</h5>
                        <p className="card-text">
                            <strong>Duration:</strong> December 2023 - Present
                            <ul>
                                <li>Developed and optimized C++ models for detection, tracking, and recognition.</li>
                             
                            </ul>
                            {showMoreMantra && (
                                <ul>
                                       <li>Converted Python models to C++ for faster execution and integration.</li>
                                       <li>Integrated detection models into GStreamer for video processing.</li>
                                    <li>Enhanced performance with frame skipping and motion detection logic.</li>
                                    <li>Developed a high-accuracy people and cup tracking system for cafes.</li>
                                    <li>Engineered a crowd detection system with ONNX Runtime.</li>
                                    <li>Integrated YOLOv8 for real-time detection on edge security cameras.</li>
                                    <li>Improved small object detection accuracy by 15% through data augmentation.</li>
                                    <li>Utilized Hailo devices for edge deployment.</li>
                                </ul>
                            )}
                            <button onClick={() => setShowMoreMantra(!showMoreMantra)} className="read-more-btn">
                                {showMoreMantra ? 'Read Less' : 'Read More'}
                            </button>
                            <br />
                            <strong>Skills:</strong> C++, Python, Bash, GStreamer, ONNX Runtime, YOLOv8, OpenCV, Meson, Ninja, Hailo, NVIDIA Jetson.
                        </p>
                    </div>
                </div>

                <div className="card" >
                    <div className="card-body">
                        <h5 className="card-title">Research Intern - National Institute of Technology Raipur</h5>
                        <p className="card-text">
                            <strong>Duration:</strong> May 2023 - July 2023
                            <ul>
                                <li>Simulated urban signal propagation using FEKO.</li>
                                <li>Built CNN models for output power prediction, achieving 90% accuracy.</li>
                            </ul>
                            {showMoreNIT && (
                                <ul>
                                    <li>Increased efficiency by 25% and reduced error by 20%.</li>
                                </ul>
                            )}
                            <button onClick={() => setShowMoreNIT(!showMoreNIT)} className="read-more-btn">
                                {showMoreNIT ? 'Read Less' : 'Read More'}
                            </button>
                        </p>
                    </div>
                </div>
            </section>

                    <br />

                    <h1>Education</h1>
                    <br />
                    <section className="education">
                        <div className="card" >
                            <img src="../images/national_institute_of_technology_raipur.jpg" className="card-img-top" alt="NIT Raipur" />
                            <div className="card-body">
                                <h5 className="card-title">National Institute of Technology Raipur</h5>
                                <p className="card-text">Completed B.Tech at NIT RAIPUR from 2020 to 2024</p>
                            </div>
                        </div>

                        <div className="card" >
                            <img src="../images/OIP (1).jpg" className="card-img-top" alt="Hadas Junior College Nagpur" />
                            <div className="card-body">
                                <h5 className="card-title">Hadas Junior College Nagpur</h5>
                                <p className="card-text">Completed 12th with 84.3%</p>
                            </div>
                        </div>
                        <div className="card" >
                            <img src="../images/OIP (1).jpg" className="card-img-top" alt="Angel Kids Convent" />
                            <div className="card-body">
                                <h5 className="card-title">Angel Kids Convent</h5>
                                <p className="card-text">Completed 10th with 92.4%</p>
                            </div>
                        </div>
                    </section>
                </section>
            </main>
        </div>
    );
};

export default About;
