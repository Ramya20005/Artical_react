import React from "react";
import "./CSS/Header.css";

const Header = () => (
	<header className="header">
		<div className="header-container">
			<h1>My Landing Page</h1>
			<nav>
				<a href="#hero">Home</a>
				<a href="#blog">Blog</a>
				<a href="#footer">Contact</a>
			</nav>
		</div>
	</header>
);

export default Header;