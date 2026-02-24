import { useState } from 'react';
import {
  Search, Filter, Library, CheckCircle2, 
  Layers, Globe, LayoutGrid, Award, FolderTree,
   Flame, Bookmark, XCircle, Trophy
} from 'lucide-react';
import NavGroup from './NavGroup';
import SearchBar from './SearchBar';
import Filters from './Filters';
import './sidebar.css';

const Sidebar = ({ 
  onSearch, 
  onFilterChange, 
  onSelectAba, 
  minhaLista, 
  abaAtiva 
}) => {
  const [menuAberto, setMenuAberto] = useState('listas');

  const toggleMenu = (menu) => setMenuAberto(menuAberto === menu ? null : menu);

  const verCatalogoGeral = () => {
    onSelectAba('explorar');
    onSearch('');
  };

  const count = (key, value) => minhaLista.filter(j => j[key] === value).length;
  const countFlag = (flag) => minhaLista.filter(j => j[flag] === true).length;

  return (
    <aside className="sidebar">
      <div className="sidebar-logo" onClick={verCatalogoGeral} style={{ cursor: 'pointer' }}>
        <Layers size={28} className="icon-neon" />
        <h2>GAME<span>VAULT</span></h2>
      </div>

      <nav className="sidebar-nav">
        
        {/* GRUPO PESQUISAR */}
        <NavGroup
          title="PESQUISAR"
          icon={Search}
          isOpen={menuAberto === 'busca'}
          onToggle={() => toggleMenu('busca')}
        >
          <button className="btn-reset-catalog" onClick={verCatalogoGeral}>
            <Globe size={16} />
            <span>EXPLORAR CATÁLOGO</span>
          </button>
          <div className="search-separator">Busque por nome:</div>
          <SearchBar onSearch={onSearch} />
        </NavGroup>

        {/* GRUPO MINHA BIBLIOTECA */}
        <NavGroup
          title="MINHA COLEÇÃO"
          icon={Library}
          isOpen={menuAberto === 'listas'}
          onToggle={() => toggleMenu('listas')}
        >
          {/* TODOS */}
          <div className={`menu-item ${abaAtiva === 'biblioteca' ? 'active' : ''}`} onClick={() => onSelectAba('biblioteca')}>
            <LayoutGrid size={16} />
            <span>Todos os Jogos</span>
            <span className="count-badge">{minhaLista.length}</span>
          </div>

          {/* JOGANDO AGORA */}
          <div className={`menu-item ${abaAtiva === 'jogando' ? 'active' : ''}`} onClick={() => onSelectAba('jogando')}>
            <Flame size={16} color="#3498db" />
            <span>Jogando</span>
            <span className="count-badge">{count('estado', 'jogando')}</span>
          </div>

          {/* PRA JOGAR */}
          <div className={`menu-item ${abaAtiva === 'backlog' ? 'active' : ''}`} onClick={() => onSelectAba('backlog')}>
            <Bookmark size={16} color="#f39c12" />
            <span>Pra Jogar</span>
            <span className="count-badge">{count('estado', 'backlog')}</span>
          </div>

          {/* ZEREI */}
          <div className={`menu-item ${abaAtiva === 'zerados' ? 'active' : ''}`} onClick={() => onSelectAba('zerados')}>
            <CheckCircle2 size={16} color="#2ecc71" />
            <span>Zerados</span>
            <span className="count-badge">{countFlag('zerado')}</span>
          </div>

          {/* PLATINEI  */}
          <div className={`menu-item ${abaAtiva === 'platinas' ? 'active' : ''}`} onClick={() => onSelectAba('platinas')}>
            <Trophy size={16} color="#00d4ff" />
            <span>Platinados</span>
            <span className="count-badge">{countFlag('platinado')}</span>
          </div>

          {/* DESISTI */}
          <div className={`menu-item ${abaAtiva === 'dropados' ? 'active' : ''}`} onClick={() => onSelectAba('dropados')}>
            <XCircle size={16} color="#e74c3c" />
            <span>Desisti</span>
            <span className="count-badge">{count('estado', 'dropado')}</span>
          </div>
        </NavGroup>

        {/* GRUPO ORGANIZAR */}
        <NavGroup
          title="ORGANIZAR"
          icon={FolderTree}
          isOpen={menuAberto === 'organizar'}
          onToggle={() => toggleMenu('organizar')}
        >
          <div className={`menu-item ${abaAtiva === 'franquias' ? 'active' : ''}`} onClick={() => onSelectAba('franquias')}>
            <FolderTree size={16} />
            <span>Por Franquia</span>
          </div>

          <div className={`menu-item ${abaAtiva === 'tierlist' ? 'active' : ''}`} onClick={() => onSelectAba('tierlist')}>
            <Award size={16} />
            <span>Tier List (Notas)</span>
          </div>
        </NavGroup>

        {/* GRUPO FILTRAR */}
        <NavGroup
          title="FILTRAR API"
          icon={Filter}
          isOpen={menuAberto === 'filtros'}
          onToggle={() => toggleMenu('filtros')}
        >
          <Filters onFilterChange={onFilterChange} />
        </NavGroup>

      </nav>
    </aside>
  );
};

export default Sidebar;