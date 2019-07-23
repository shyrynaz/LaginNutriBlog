import React from "react";
import {Link} from 'react-router-dom';

const Article = ({title, summary, datePublished, author, post, likes, comments}) => {
	return (
		<article className="post">
			<header>
				<div className="title">
					<h2>
						<Link to ="/singlePost">{title}</Link>
					</h2>
					<p>{summary}</p>
				</div>
				<div className="meta">
					<time className="published" dateTime="2015-11-01">
						{datePublished}
					</time>
					<div className="author">
						<span className="name">{author}</span>
						<img src="images/avatar.jpg" alt="" />
					</div>
				</div>
			</header>
			<Link to="/singlePost" className="image featured">
				<img src="images/soy.jpg" alt="" />
			</Link>
			<p>{post}</p>
			<footer>
				<ul className="actions">
					<li>
						<Link to="/singlePost" className="button large">
							Continue Reading
						</Link>
					</li>
				</ul>
				<ul className="stats">
					<li>
						General
					</li>
					<li>
						<div className="icon solid fa-heart">
							{likes}
						</div>
					</li>
					<li>
						<div className="icon solid fa-comment">
							{comments}
						</div>
					</li>
				</ul>
			</footer>
		</article>
	);
}

export default Article;

