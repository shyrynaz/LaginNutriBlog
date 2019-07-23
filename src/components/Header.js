import React from "react";
import { Link } from "react-router-dom";

function Header() {
	return (
		<div>
			<header id="header">
				<h1>
					<Link to="/">LaGIN</Link>
				</h1>
				<nav className="links">
					<ul>
						<li>
							<Link to="/">HOME</Link>
						</li>
						<li>
							<Link to="/">VIDEO LIBRARY</Link>
						</li>
						<li>SUBSCRIBE</li>
						<li>
							<Link to="/">ABOUT</Link>
						</li>
						<li>
							<Link to="/">CONTACT US</Link>
						</li>
					</ul>
				</nav>
				<nav className="main">
					<ul className="actions">
						<li>
							<Link to ="/" className="button small fit">
								Log In
							</Link>
						</li>
						<li>
							<Link to="/" className="button small fit">
								Sign Up
							</Link>
						</li>
					</ul>
				</nav>
			</header>
		</div>
	);
}

export default Header;
