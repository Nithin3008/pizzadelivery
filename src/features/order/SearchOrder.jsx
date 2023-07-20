import { useState } from 'react';
import { useNavigate } from 'react-router';

export const SearchOrder = () => {
  const [query, setQuery] = useState();
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    if (query.length === 0) return;
    navigate(`/order/${query}`);
    setQuery('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search Order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="foucs:ring-opacity-50 w-28 rounded-full bg-yellow-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-500 sm:w-64 sm:focus:w-72"
      ></input>
    </form>
  );
};
