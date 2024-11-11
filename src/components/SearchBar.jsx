function SearchBar({ onSearch, setIngredient }) {
  return (
    <div className='flex justify-center mb-4'>
      <input
        type='text'
        placeholder='Search for ingredients...'
        onChange={(e) => setIngredient(e.target.value)}
        className='border rounded-l-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500'
      />
      <button
        onClick={onSearch}
        className='bg-blue-500 text-white rounded-r-lg p-2 hover:bg-blue-600 transition duration-200'
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
