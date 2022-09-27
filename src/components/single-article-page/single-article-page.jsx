import './single-article-page.css'
import * as api from '../../utils/api'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const SingleArticlePage = ({}) => {
  const { id } = useParams();

  const [singleArticle, setSingleArticle] = useState([]);
  const [disableAdd, setDisableAdd] = useState(false)
  const [disableRemove, setDisableRemove] = useState(false)

  useEffect(() => {
    api.getArticleById(id).then(article => {
        setSingleArticle(article)
    });
  }, [id]);

  const addVote = () => {
    axios
    .patch(
      `https://sizens-nc-news-app.herokuapp.com/api/articles/${id}`,
      {
        inc_votes: 1
      }
    )
    .then((res) => console.log(res))
    .catch((err) => console.log(err, "Something went wrong, cannot add vote!"))

    setSingleArticle((currentSingleArticle) => {
        return {...currentSingleArticle, votes: currentSingleArticle.votes + 1}
      })
      setDisableAdd(true)
  }

  const removeVote = () => {
    axios
    .patch(
      `https://sizens-nc-news-app.herokuapp.com/api/articles/${id}`,
      {
        inc_votes: -1
      }
    )
    .then((res) => console.log(res))
    .catch((err) => console.log(err, "Something went wrong, cannot remove vote!"))

    setSingleArticle((currentSingleArticle) => {
        return {...currentSingleArticle, votes: currentSingleArticle.votes - 1}
      })
      setDisableRemove(true)
  }

  if(disableRemove === true && disableRemove === true) {
    setDisableAdd(false)
    setDisableRemove(false)
  }


  return (
    <div className='article-page-container'>
        <h1 className='article-page-title'>{singleArticle.title}</h1>
        <p>{singleArticle.body}</p>
        <br/>
        <div className="article-voting">
        <button type="button" onClick={addVote} disabled={disableAdd}>
          <span>&#9650;</span>
          <span>Vote up</span>
        </button>
        <button type="button" onClick={removeVote} disabled={disableRemove}>
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
