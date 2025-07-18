import ReactTimeAgo from "react-time-ago";

const Comment = ({ author, text, publishedAt }) => {
    return (
        <div>
            <p className="font-bold">{author}</p>
            <p>{text}</p>
            <small className="text-gray-500"><ReactTimeAgo date={publishedAt} locale="en-US"/></small>
        </div>
    );
}

export default Comment;