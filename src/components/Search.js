const Search = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="p-4">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full p-2 border rounded"
        placeholder="Искать контакты..."
      />
    </div>
  );
};

export default Search;
