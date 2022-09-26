import TopicItem from '../topic-item/topic-item'
import './topics.css'

const Topics = ({topics}) => {

    return(    
    <div className='topics-container'>
      {topics.map((topic) => {
        return(
        <TopicItem key={topic.id} topic={topic}/>)
        })
      }
    </div>)
  };


export default Topics;


