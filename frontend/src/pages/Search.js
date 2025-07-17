import { useState } from 'react'

import SearchBar from "../components/search/SearchBar";
import SearchResults from "../components/search/SearchResults";

const Search = () => {
    const [results, setResults] = useState([]);
    
    return (
        <div>
            <SearchBar setResults={setResults} />
            <SearchResults results={results} />
        </div>
    );
}

export default Search;