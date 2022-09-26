import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/header/header';
import Navigation from './components/navigation/Navigation';
import Home from './components/home/Home';
import Profile from './components/profile/Profile';
import Topics from './components/topics/Topics';
import Articles from './components/articles/Articles';
import { useState, useEffect } from 'react';
import axios from 'axios';

const App =() => {


  const [topics, setTopics] = useState([]);

  useEffect(() => {
    axios
    .get("https://sizens-nc-news-app.herokuapp.com/api/topics")
    .then((res) => {
      setTopics(res.data.topics)
    })
  },[]);

  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Navigation />
        <Routes>
          <Route
            path='/'
            element={<Home/>}/>
          <Route
          path='/topics'
          element={<Topics topics={topics}/>}/>
          <Route
          path='/articles'
          element={<Articles/>}/>
          <Route
          path='/profile'
          element={<Profile/>}/>
        </Routes>
      </div>    
    </BrowserRouter>

  );
}

export default App;
