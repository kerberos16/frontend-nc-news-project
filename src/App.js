import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/header/header';
import Navigation from './components/navigation/Navigation';
import Home from './components/home/Home';
import Profile from './components/profile/Profile';
import Topics from './components/topics/Topics';
import Articles from './components/articles/Articles';
import { useState, useEffect } from 'react';

const App =() => {

  const [topic, setTopic] = useState([]);

  useEffect(() => {
    fetch("https://sizens-nc-news-app.herokuapp.com/api/topics")
      .then((res) => res.json())
      .then((data) => {
        setTopic(data.topics)
      })
  },[])

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
          element={<Topics/>}/>
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
