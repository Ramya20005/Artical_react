import React from "react";
import "./CSS/Blog.css";

const Blog = () => (
	<section className="blog" id="blog">
		<h3>Latest Blog Posts</h3>
		<div className="blog-list">
			<article className="blog-post">
				<h4>How to Build a React App</h4>
				<p>Learn the basics of building a React application from scratch.</p>
			</article>
			<article className="blog-post">
				<h4>Styling in React</h4>
				<p>Explore different ways to style your React components effectively.</p>
			</article>
			<article className="blog-post">
				<h4>Deploying to the Web</h4>
				<p>Best practices for deploying your React app to production.</p>
			</article>
		</div>
	</section>
);

export default Blog;
