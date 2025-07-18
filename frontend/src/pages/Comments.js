import axios from 'axios'
import { useState, useEffect } from 'react'; 
import { useParams } from 'react-router-dom';

import Comment from "../components/comments/comment";

const Comments = () => {
    const [comments, setcomments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        axios
            .get(`http://localhost:5000/api/comments/${id}`)
            .then(res => {
                setIsLoading(false);
                setcomments(res.data)
            })
            .catch(err => {
                setIsLoading(false);
                console.log(err)
            });
    }, [id]);

    return (
        <div className='text-left w-[40%] m-auto'>
            
            <div className='text-center'>
                {isLoading && "Loading..."}
            </div>
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