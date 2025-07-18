import axios from 'axios'
import { useState, useEffect } from 'react'; 
import { useParams } from 'react-router-dom';

import Comment from "../components/comments/comment";

const Comments = () => {
    const [comments, setcomments] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        axios
            .get(`http://localhost:5000/api/comments/${id}`)
            .then(res => {
                setcomments(res.data)
            })
            .catch(err => console.log(err));
    }, [id]);

    return (
        <div className='text-left'>
            {comments.map(({author, text, publishedAt}) => (
                <div key={`${author}-${publishedAt}`}>
                    <Comment
                        text={text}
                        author={author}
                        publishedAt={publishedAt}
                    />
                </div>
            ))}
        </div>
    );
}

export default Comments;