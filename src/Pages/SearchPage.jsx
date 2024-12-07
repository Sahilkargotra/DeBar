import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
//import NavBar from '../components/navBar';
import barProducts from '../../products'; // Adjust the import path as needed

function SearchResults() {
  const query = new URLSearchParams(useLocation().search).get('query');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch and filter results based on the search query
    const fetchResults = () => {
      try {
        setIsLoading(true);
        const filteredResults = barProducts.filter((product) =>
          product.name.toLowerCase().includes(query.toLowerCase())
        );
        setResults(filteredResults);
      } catch (err) {
        setError('Failed to fetch results.',err);
      } finally {
        setIsLoading(false);
      }
    };

    if (query) fetchResults();
  }, [query]);

  return (
    <div>
      <div style={{ marginTop: '200px', padding: '20px' }}>
        <h1>Search Results for {query}</h1>
        {isLoading && <p>Loading results...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {!isLoading && !error && results.length === 0 && <p>No results found.</p>}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
          {results.map((item) => (
            <div key={item.id} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '15px' }}>
              <img
                src={item.image}
                alt={item.name}
                style={{ width: '100%', borderRadius: '8px', marginBottom: '10px' }}
              />
              <h2>{item.name}</h2>
              <p>Category: {item.category}</p>
              <p>Price: ${item.price.toFixed(2)}</p>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchResults;
