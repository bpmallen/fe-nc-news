const ArticleSearch = ({ setSearchTerm }) => {
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Search submitted!");
  };

  return (
    <form className="article-search" onSubmit={handleSubmit}>
      <label>
        Search
        <input
          type="text"
          onChange={handleChange} // Update state on input change
        />
      </label>
      <button type="submit">Search</button>
    </form>
  );
};

export default ArticleSearch;
