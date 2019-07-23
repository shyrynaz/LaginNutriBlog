import React from "react";
import Articles from "../components/Articles";
import SideBar from "../components/SideBar";
import Pagination from "../components/Pagination";
import Menu from "../components/Menu";
import { firestore } from "../firebase";

class Home extends React.Component {
  state = {
    articles: [
      {
        id: '1',
        title : "Benefits of Soy In Your Body",
        datePublished : "January 1 2019",
        summary : "soy has so many benefits",
        post : "Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl Sed mattis nunc id",
        likes : "20",
        comments : "50",
        author: "Genarene Wanyaga"
      },
      {
        id: '2',
        title : "Benefits of Soy In Your Body",
        datePublished : "January 1 2019",
        summary : "soy has so many benefits",
        post : "Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl Sed mattis nunc id",
        likes : "20",
        comments : "50",
        author: "Genarene Wairimu"
      },
      {
        id: '3',
        title : "Benefits of Soy In Your Body",
        datePublished : "January 1 2019",
        summary : "soy has so many benefits",
        post : "Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl Sed mattis nunc id",
        likes : "20",
        comments : "50",
        author: "Genarene Muchiri"
      }
    ]
  }
  componentDidMount = async () =>{
    const snapshot = await firestore.collection('articles').get();
    const articles = snapshot.docs.map(doc => {
      return {id: doc.id, ...doc.data()};
    })
    // this.setState({articles});
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
