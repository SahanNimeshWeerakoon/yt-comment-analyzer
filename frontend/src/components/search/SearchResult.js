import ReactTimeAgo from 'react-time-ago'
import { Link } from 'react-router-dom'

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

    return (
        <Link to={`/comments/${videoId}`} className="flex hover:cursor-pointer">
            <div className='w-1/3 rounded'>
                <img src={thumbnail} alt={title} />
            </div>
            <div className='w-2/3 text-left px-10 py-3 border'>
                <h3>{title}</h3>
                <p className='d-block'><ReactTimeAgo date={publishedAt} locale="en-US"/></p>
                <p>{channelTitle}</p>
            </div>
        </Link>
    );
}

export default SearchResult