import './single-article-page.css'
import * as api from '../../utils/api'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../comments/Comments';
import AddComment from '../add-comment/add-comment';
import Error from '../error/error';


const SingleArticlePage = () => {
  const { id } = useParams();

  const [singleArticle, setSingleArticle] = useState([]);
  const [disable, setDisable] = useState(false)
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    api.getArticleById(id).then(article => {
        setSingleArticle(article)
    }).catch((err)=> setIsError(true));
  }, [id, singleArticle.comment_count]);

  const handleVotes = (num) => {
    const voteChange = {inc_votes : num}
    api.updateVotes(id, voteChange).then((res) => console.log(res))

    setSingleArticle((currentSingleArticle) => {
        return {...currentSingleArticle, votes: currentSingleArticle.votes + num}
      })
      setDisable(true)
  }

  return (
    <div className='article-page-container'>
        {isError ? <Error/> :
        <>
        <h1 className='article-page-title'>{singleArticle.title}</h1>
        <p className='article-body'>{singleArticle.body}</p>
        <br/>
        <div className="article-voting">
        <button className="voting-button" type="button" onClick={ () => handleVotes(1)} disabled={disable}>
          <span>&#9650;</span>
          <span>Vote up</span>
        </button>
        <button className="voting-button" type="button" onClick={() => handleVotes(-1)} disabled={disable}>
          <span>&#9660;</span>
          <span>Vote down</span>
        </button>       
        <h4>
        Votes: {singleArticle.votes} Comments: {singleArticle.comment_count}
      </h4>
      </div> 
      <div>
        <div>
          <AddComment/>
        </div>
      </div>
      <br/>
      <div>
       <Comments/>
      </div>
        </>}
    </div>);
};

export default SingleArticlePage
