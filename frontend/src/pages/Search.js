import { useState } from 'react'

import SearchBar from "../components/search/SearchBar";
import SearchResults from "../components/search/SearchResults";

const Search = () => {
    const [results, setResults] = useState([]);
    
    return (
        <div className='w-[40%] m-auto'>
            <SearchBar setResults={setResults} />
            <SearchResults results={results} />
        </div>
    );
}

export default Search;