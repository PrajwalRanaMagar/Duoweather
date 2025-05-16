import { FaMagnifyingGlass, FaSpinner } from 'react-icons/fa6';

const SearchBar = ({ searchTerm, setSearchTerm, handleSearch, loading }) => (
  <form
    onSubmit={handleSearch}
    className="border border-opacity-20 rounded-3xl flex justify-between "
  >
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search city..."
      className="flex-1 bg-transparent outline-none p-2 "
    />
    <button
      type="submit"
      className="text-gray-500 hover:text-gray-700 transition-colors disabled:opacity-50"
      disabled={loading}
    >
      {loading ? <FaSpinner className="animate-spin text-base sm:text-lg" /> : <FaMagnifyingGlass className="text-base sm:text-lg" />}
    </button>
  </form>
);

export default SearchBar;
