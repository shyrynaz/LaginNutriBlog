import React from "react";
import {Link} from 'react-router-dom';

function Footer() {
	return (
		<section id="footer">
			<ul className="icons">
				<li>
					<Link to="/" className="icon brands fa-twitter">
						<span className="label">Twitter</span>
					</Link>
				</li>
				<li>
					<Link to="/" className="icon brands fa-facebook-f">
						<span className="label">Facebook</span>
					</Link>
				</li>
				<li>
					<Link to="/"className="icon brands fa-instagram">
						<span className="label">Instagram</span>
					</Link>
				</li>
				<li>
					<Link to="/" className="icon solid fa-rss">
						<span className="label">RSS</span>
					</Link>
				</li>
				<li>
					<Link to="/" className="icon solid fa-envelope">
						<span className="label">Email</span>
					</Link>
				</li>
			</ul>
			<p className="copyright">
				&copy; Shiri INC <a href="http://html5up.net">International</a>. Images:
				<a href="http://unsplash.com">Unsplash</a>.
			</p>
		</section>
	);
}

export default Footer;
