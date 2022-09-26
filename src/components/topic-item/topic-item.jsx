import {useNavigate} from 'react-router-dom';
import './topic-item.css'

const TopicItem = ({topic}) => {
    
    const navigate = useNavigate()

    const onNavigateHandler = () => navigate(`/topics/${topic.slug}`);

    return (
        <div className='topic-container' onClick={onNavigateHandler}>
            <h2 className='topic-title'>{topic.slug}</h2>
            <p>View Articles on that topic</p>
        </div>
    )
}

export default TopicItem;
