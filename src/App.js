import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/header/header';
import Navigation from './components/navigation/Navigation';
import Home from './components/home/Home';
import Profile from './components/profile/Profile';
import Topics from './components/topics/Topics';
import Articles from './components/articles/Articles';
import SingleArticlePage from './components/single-article-page/single-article-page';
import AddComment from './components/add-comment/add-comment';
import CommentModifiers from './components/comment-modifiers/comment-modifiers';
import Error from './components/error/error';
import SignIn from './components/sign-in/sign-in';
import { useState } from 'react';

const App =() => {

  const [userSignedIn, setUserSignedIn] = useState(false)
  
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Navigation userSignedIn={userSignedIn}/>
        <SignIn setUserSignedIn={setUserSignedIn}/>
        { userSignedIn === false ? (
          <>
          <p className='login-message'>You need to sign in first</p>
          </>
        ) : (
        <Routes>
          <Route
          path='/'
          element={<Home/>}/>
          <Route
          path='/topics'
          element={<Topics/>}/>
          <Route
          path='/articles'
          element={<Articles/>}/>
          <Route
          path='/topics/:topic'
          element={<Articles/>}/>
          <Route
          path='/articles/:id'
          element={<SingleArticlePage/>}/>
          <Route
          path='/profile'
          element={<Profile/>}/>
          <Route
          path='/articles/:id/comments'
          element={<AddComment/>}/>
          <Route
          path='/comments/:comments_id'
          element={<CommentModifiers/>}/>
          <Route
          path='*'
          element={<Error />}/>
        </Routes>)}
      </div>    
    </BrowserRouter>

  );
}

export default App;
