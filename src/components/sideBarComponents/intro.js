import React from "react";
import {Link} from "react-router-dom";

function Intro() {
	return (
		<section id="intro">
			<Link to="/" className="logo">
				<img src="images/logo.png" alt="" />
			</Link>
			<header>
				<h2>LaGIN</h2>
				<p>The Global Impact Nutrition</p>
			</header>
		</section>
	);
}

export default Intro;
