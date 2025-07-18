import ReactTimeAgo from 'react-time-ago'
import { useNavigate } from 'react-router-dom'

const SearchResult = ({
    result
}) => {
    const {
        title,
        videoId,
        thumbnail,
        publishedAt,
        channelTitle
    } = result;

    const navigate = useNavigate();

    const handleClick = () => {
        localStorage.setItem("videoDetails", JSON.stringify({
            title,
            videoId,
            thumbnail,
            publishedAt,
            channelTitle
        }));
        navigate(`/comments/${videoId}`);
    }

    return (
        <button onClick={handleClick} className="flex hover:cursor-pointer">
            <div className='w-1/3 rounded'>
                <img src={thumbnail} alt={title} />
            </div>
            <div className='w-2/3 text-left px-10 py-3 border'>
                <h3>{title}</h3>
                <p className='d-block'><ReactTimeAgo date={publishedAt} locale="en-US"/></p>
                <p>{channelTitle}</p>
            </div>
        </button>
    );
}

export default SearchResult