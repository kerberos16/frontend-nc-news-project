import TopicItem from '../topic-item/topic-item'
import './topics.css'

import * as api from '../../utils/api'
import { useEffect, useState } from 'react';

const Topics = ({}) => {

    const [topics, setTopics] = useState([]);

    useEffect(() => {
      api.getTopics().then(topics => {
        setTopics(topics)
      })
    })

    return(    
    <div className='topics-container'>
      {topics.map((topic) => {
        return(
        <TopicItem key={topic.slug} topic={topic}/>)
        })
      }
    </div>)
  };


export default Topics;


