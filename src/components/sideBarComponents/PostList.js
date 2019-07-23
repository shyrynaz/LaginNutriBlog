import React, { Component } from "react";
import {Link } from 'react-router-dom';

export default class PostList extends Component {
	render() {
		const { title, datePublished, image } = this.props;
		return (
			<ul className="posts">
				<li>
					<article>
						<header>
							<h3>
								<Link to="/singlePost">{title}</Link>
							</h3>
							<time className="published" dateTime="2015-10-20">
								{datePublished}
							</time>
						</header>
						<Link to="/singlePost" className="image">
							<img src={image} alt="" />
						</Link>
					</article>
				</li>
			</ul>
		);
	}
}
