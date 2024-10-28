import React from 'react';
import './Home.css'
import  igk from '../images/coder_4x.jpg'
function Home() {
  return (
    <div>
     
      
        <section className="first">
          <div className="leftsection">
            <img src="../images/coder_4x.jpg" alt="Profile" />
          </div>
          <div className="rightsection">
            <br/>
            Hi my name is 
            <br />
            <br />
            <span className="name">SAMEER SONWANE</span>

            <br />
            <br />
            <span className="intro">
            A passionate Software Developer 🚀skilled in both AI/ML and web development, with expertise in JavaScript, React, Node, NLP, PyTorch, and TensorFlow, creating intelligent, user-centric solutions.
            </span>
            <br />
            <button className="btn"><a href='https://drive.google.com/file/d/17J0p3KnArSYFnFeLodhc3KeDCanCmiMv/view?usp=sharing' target="_blank" >Download Resume</a></button> <br />
            <button className="btn"> <a href='https://github.com/sssam20' target="_blank">Github</a> </button>
          </div>
        </section>
        {/* <hr />

        <section className="second">
          <h1>
            <span>What I have done so far</span>
            <br />
            <br />
            Past experience
          </h1>
          <div className="box">
            <div className="vertical">
              <img className="image-top" src="images/vector-cartoon-illustration-of-school-classroom.jpg" alt="School" />
              <div className="vertical-title">COMPLETED SCHOOLING(10TH) <br />92.4% in 2018</div>
            </div>
            <div className="vertical">
              <img className="image-top" src="images/cartoon-college-campus-990x592.jpg" alt="College" />
              <div className="vertical-title">COMPLETED COLLEGE(12th) <br /> 84.3% in 2020</div>
            </div>
            <div className="vertical">
              <img className="image-top" src="images/OIP.jpg" alt="University" />
              <div className="vertical-title">CURRENTLY DOING BTECH IN NIT RAIPUR</div>
            </div>
            <div className="vertical">
              <img className="image-top" src="images/th.jpg" alt="Internship" />
              <div className="vertical-title">RESEARCH INTERNSHIP AT NIT RAIPUR</div>
            </div>
          </div>
        </section> */}
    </div>
  );
}

export default Home;
