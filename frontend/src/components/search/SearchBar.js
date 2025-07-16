import { useState } from 'react';

const SearchBar = () => {
    const [keyword, setKeyword] = useState("");
    return (
        <div>
            <input value={keyword} onChange={(e) => setKeyword(e.target.value)} />
        </div>
    );
}

export default SearchBar;