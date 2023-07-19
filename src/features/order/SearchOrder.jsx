import { useState } from "react";
import { useNavigate } from "react-router";

export const SearchOrder = () => {
  const [query, setQuery] = useState();
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    if (query.length === 0) return;
    navigate(`/order/${query}`);
    setQuery("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search Order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      ></input>
    </form>
  );
};
