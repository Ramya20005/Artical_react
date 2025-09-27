import React from "react";
import "./CSS/Footer.css";



const Footer = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
		alert('Thank you for contacting us! Your message has been received.');
	};
	return (
		<footer className="footer" id="footer">
			<div className="footer-content">
				<h3>Contact Us</h3>
				<form className="contact-form" onSubmit={handleSubmit}>
					<input type="text" name="name" placeholder="Your Name" required />
					<input type="email" name="email" placeholder="Your Email" required />
					<textarea name="message" placeholder="Your Message" required></textarea>
					<button type="submit">Send</button>
				</form>
				<p style={{marginTop: '24px'}}>&copy; 2025 My Landing Page. All rights reserved.</p>
			</div>
		</footer>
	);
};

export default Footer;
