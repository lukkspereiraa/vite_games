import './Filters.css';

const Filters = ({ onFilterChange }) => {
  return (
    <div className="filters-container">
      {/* Categoria */}
      <div className="filter-group">
        <select 
          className="filter-select"
          onChange={(e) => onFilterChange('genre', e.target.value)}
        >
          <option value="">CATEGORIA: TODAS</option>
          <option value="action">AÇÃO</option>
          <option value="indie">INDIE</option>
          <option value="adventure">AVENTURA</option>
          <option value="role-playing-games-rpg">RPG</option>
          <option value="shooter">SHOOTER (FPS)</option>
          <option value="strategy">ESTRATÉGIA</option>
        </select>
      </div>

      {/* Ordenação */}
      <div className="filter-group">
        <select 
          className="filter-select"
          onChange={(e) => onFilterChange('order', e.target.value)}
        >
          <option value="">ORDENAR POR</option>
          <option value="-metacritic">MAIS POPULARES</option>
          <option value="-released">LANÇAMENTOS</option>
          <option value="-added">ADICIONADOS RECENTE</option>
          <option value="name">NOME (A-Z)</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;