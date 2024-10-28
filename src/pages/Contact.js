// Contact.js
import React, { useState } from 'react';
import './Contact.css';  // Import the external CSS file

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [comments, setComments] = useState([]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Save the submitted message as a comment
        setComments([...comments, formData]);

        // Clear the form
        setFormData({
            name: '',
            email: '',
            message: ''
        });
        alert(`Thank you ${formData.name}, your message has been submitted.`);
    };

    return (
        <section className="contact">
            <h1>Contact Me</h1>
            
            {/* Personal Info Section */}
            <div className="contact-info white-box">
                <h2>My Info</h2>
                <ul>
                    <li><strong>Mobile:</strong> 9823793964</li>
                    <li><strong>Email:</strong> sameersonwane718@gmail.com</li>
                    <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/sameer-sonwane-a34b70218/" target="_blank" rel="noopener noreferrer">linkedin.com/in/sameer-sonwane</a></li>
                </ul>
            </div>

            {/* Contact Form Section */}
            <form className="contact-form white-box" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn-submit">Submit</button>
            </form>

            {/* Comments Section */}
            <section className="comments">
                <h2>Comments</h2>
                {comments.length === 0 ? (
                    <p>No comments yet.</p>
                ) : (
                    <ul>
                        {comments.map((comment, index) => (
                            <li key={index}>
                                <strong>{comment.name}:</strong> {comment.message} (<em>{comment.email}</em>)
                            </li>
                        ))}
                    </ul>
                )}
            </section>
        </section>
    );
};

export default Contact;
