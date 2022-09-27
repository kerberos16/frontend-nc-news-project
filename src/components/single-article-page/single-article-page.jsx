import './single-article-page.css'
import * as api from '../../utils/api'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleArticlePage = ({}) => {
  const { id } = useParams();

  const [singleArticle, setSingleArticle] = useState([]);

  useEffect(() => {
    api.getArticleById(id).then(article => {
        setSingleArticle(article)
    });
  }, [id]);

  return (
    <div className='article-page-container'>
        <h1 className='article-title'>{singleArticle.title}</h1>
        <body>{singleArticle.body}</body>
        <br/>
        <div className="article-voting">
        <button type="button">
          <span>&#9650;</span>
          <span>Vote up</span>
        </button>
        <button type="button">
          <span>&#9660;</span>
          <span>Vote down</span>
        </button>       
        <h4>
        Votes: {singleArticle.votes} Comments: {singleArticle.comment_count}
      </h4>
      </div> 
      <div>
        <button>
          Post a Comment
        </button>
      </div>
      <br/>
      <div>
        ALL COMMENTS TO BE DISPLAYED BELOW
      </div>
    </div>);
};

export default SingleArticlePage
