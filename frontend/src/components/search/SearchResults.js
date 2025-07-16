import SearchResult from "./SearchResult";

const SearchResults = () => {
    const results = [
        {
            title: "වයසට යාම පමා කිරීම (Anti-Aging) බොරුවක් නොවේ, මහපොළවේ යතාර්ථයක්!",
            thumbnail: "https://i.ytimg.com/vi/1RFlb13fTkY/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBO8zHJ3RcKP4JhZIs67fpPvQG2dw",
            channelTitle: "Science With Ruchira",
            publishedAt: "3 days ago"
        }
    ]
    return (
        <div>
            {results.map(result => (
                <div key={result.thumbnail}>
                    <SearchResult result={result} />
                </div>
            ))}
            Search Results
        </div>
    );
}

export default SearchResults