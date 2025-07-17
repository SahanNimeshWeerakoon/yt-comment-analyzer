import { useState, useEffect } from 'react';
import axios from 'axios'

import useDebounce from '../../hooks/useDebounce';

const SearchBar = ({ setResults }) => {
    const [keyword, setKeyword] = useState("");
    
    const debouncedKeyword = useDebounce(keyword, 500);

    useEffect(() => {
        if(debouncedKeyword) {
            axios.get(`http://localhost:5000/api/search?query=${debouncedKeyword}`)
                .then(res => {
                    console.log(res);
                    setResults(res?.data)
                })
                .catch(err => console.log(err));
        }
    }, [debouncedKeyword, setResults]);

    return (
        <div className='w-[40%] m-auto'>
            <input value={keyword} onChange={(e) => setKeyword(e.target.value)} className='border border-black my-5 w-full p-3 rounded-full' />
        </div>
    );
}

export default SearchBar;