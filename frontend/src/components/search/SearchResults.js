import SearchResult from "./SearchResult";

const SearchResults = ({ results }) => {
    return (
        <div className="w-[60%] m-auto">
            {results.map(result => (
                <div key={result.thumbnail}>
                    <SearchResult result={result} />
                </div>
            ))}
        </div>
    );
}

export default SearchResults