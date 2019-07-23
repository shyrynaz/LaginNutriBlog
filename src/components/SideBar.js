import React, { Component } from "react";
import Footer from "./Footer";
import Intro from "./sideBarComponents/intro";
import MiniPost from "./sideBarComponents/MiniPosts";
import PostList from "./sideBarComponents/PostList";
import About from "./sideBarComponents/About";
export default class SideBar extends Component {
	render() {
		return (
			<section id="sidebar">
				<Intro />

				<section>
					<MiniPost
						title="All about healthy living"
						date="march 5 2019"
						avatar="images/avatar.jpg"
						image="images/pic04.jpg"
					/>
					<MiniPost
						title="All about healthy living"
						date="march 5 2019"
						avatar="images/avatar.jpg"
						image="images/pic05.jpg"
					/>
					<MiniPost
						title="All about healthy living"
						date="march 5 2019"
						avatar="images/avatar.jpg"
						image="images/pic06.jpg"
					/>
					<MiniPost
						title="All about healthy living"
						date="march 5 2019"
						avatar="images/avatar.jpg"
						image="images/pic07.jpg"
					/>
				</section>
				<section>
					<PostList title="Food in place of medicine" image="images/pic08.jpg" datePublished="may 7 2019" />
					<PostList title="Food in place of medicine" image="images/pic09.jpg" datePublished="may 7 2019" />
					<PostList title="Food in place of medicine" image="images/pic10.jpg" datePublished="may 7 2019" />
					<PostList title="Food in place of medicine" image="images/pic08.jpg" datePublished="may 7 2019" />
				</section>
				<About />
				<Footer />
			</section>
		);
	}
}
