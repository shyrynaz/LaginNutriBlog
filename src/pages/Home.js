import React from "react";
import Articles from "../components/Articles";
import SideBar from "../components/SideBar";
import Pagination from "../components/Pagination";
import Menu from "../components/Menu";
import { firestore } from "../firebase";
import { getIdsAndDocs } from "../utility";

class Home extends React.Component {
  state = {
    articles: [ ]
  }
  componentDidMount = async () =>{
    const snapshot = await firestore.collection('articles').get();
    const articles = snapshot.docs.map(getIdsAndDocs);
    this.setState({articles});
  }
  render(){
    const {articles} = this.state;
    return (
      <div id="wrapper">
        <Menu />
        <div id="main">
          <Articles articles={articles} />
          <Pagination />
        </div>
        <SideBar />
      </div>
    );
  }
	
}

export default Home;
