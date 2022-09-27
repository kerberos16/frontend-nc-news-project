// import './single-article-page.css'
// import * as api from '../../utils/api'
// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// const SingleArticlePage = ({}) => {
//   const { id } = useParams();

//   const [singleArticle, setSingleArticle] = useState([]);

//   useEffect(() => {
//     api.getArticleById(id).then(article => {
//         setSingleArticle(article)
//     });
//   }, [id]);

//   return (
//     <div className='single-article-container'>
//         <h1>{singleArticle.title}</h1>
//     </div>);
// };

// export default SingleArticlePage
