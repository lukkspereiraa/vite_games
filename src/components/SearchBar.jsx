import { Search } from 'lucide-react'; 
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  return (
    <div className="search-container">
      <Search className="search-icon" size={16} strokeWidth={2.5} />
      <input
        type="text"
        className="search-input"
        placeholder="PESQUISAR TÍTULO..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;