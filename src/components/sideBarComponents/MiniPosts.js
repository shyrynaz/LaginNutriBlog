import React from "react";
import {Link} from 'react-router-dom';

const MiniPost = ({title, date, image, avatar }) => {
		return (
			<div className="mini-posts">
				<article className="mini-post">
					<header>
						<h3>
							<Link to="/singlePost">{title}</Link>
						</h3>
						<time className="published" dateTime="2015-10-20">
							{date}
						</time>
						<Link to="/" className="author">
							<img src={avatar} alt="" />
						</Link>
					</header>
					<Link to="/singlePost" className="image">
						<img src={image} alt="" />
					</Link>
				</article>
			</div>
		);
	}

export default MiniPost;
