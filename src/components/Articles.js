import React from 'react'
import Article from './Article';
// import AddArticle from './AddArticle';

const Articles = ({ articles, onCreate }) => {
  return (
    <section className="Posts">
      {/* <AddArti onCreate={onCreate} /> */}
      {articles.map(article => <Article {...article} key={article.id} />)}
    </section>
  )
}
export default Articles;