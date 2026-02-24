import { useState } from 'react';
import {
  Search, Filter, Library, CheckCircle2, 
  Layers, Globe, LayoutGrid, Award, FolderTree,
  Flame, Bookmark, XCircle, Trophy, Menu, X 
} from 'lucide-react';
import NavGroup from './NavGroup';
import SearchBar from './SearchBar';
import Filters from './Filters';
import './Sidebar.css';

const Sidebar = ({ 
  onSearch, 
  onFilterChange, 
  onSelectAba, 
  minhaLista, 
  abaAtiva 
}) => {
  const [menuAberto, setMenuAberto] = useState('listas');
  const [sidebarVisivel, setSidebarVisivel] = useState(false);

  const toggleMenu = (menu) => setMenuAberto(menuAberto === menu ? null : menu);
  
  const toggleSidebarMobile = () => setSidebarVisivel(!sidebarVisivel);

  const verCatalogoGeral = () => {
    onSelectAba('explorar');
    onSearch('');
    setSidebarVisivel(false);
  };

  const handleSelecaoAba = (aba) => {
    onSelectAba(aba);
    setSidebarVisivel(false); 
  };

  const count = (key, value) => minhaLista.filter(j => j[key] === value).length;
  const countFlag = (flag) => minhaLista.filter(j => j[flag] === true).length;

  return (
    <>
      {/* Botão Hambúrguer para Mobile */}
      <button className="mobile-menu-toggle" onClick={toggleSidebarMobile}>
        {sidebarVisivel ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay para fechar ao clicar fora (Mobile) */}
      {sidebarVisivel && (
        <div className="sidebar-overlay" onClick={toggleSidebarMobile}></div>
      )}

      <aside className={`sidebar ${sidebarVisivel ? 'mobile-open' : ''}`}>
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
            <SearchBar onSearch={(val) => { onSearch(val); if(window.innerWidth < 768) setSidebarVisivel(false); }} />
          </NavGroup>

          {/* GRUPO MINHA BIBLIOTECA */}
          <NavGroup
            title="MINHA COLEÇÃO"
            icon={Library}
            isOpen={menuAberto === 'listas'}
            onToggle={() => toggleMenu('listas')}
          >
            <div className={`menu-item ${abaAtiva === 'biblioteca' ? 'active' : ''}`} onClick={() => handleSelecaoAba('biblioteca')}>
              <LayoutGrid size={16} />
              <span>Todos os Jogos</span>
              <span className="count-badge">{minhaLista.length}</span>
            </div>

            <div className={`menu-item ${abaAtiva === 'jogando' ? 'active' : ''}`} onClick={() => handleSelecaoAba('jogando')}>
              <Flame size={16} color="#3498db" />
              <span>Jogando</span>
              <span className="count-badge">{count('estado', 'jogando')}</span>
            </div>

            <div className={`menu-item ${abaAtiva === 'backlog' ? 'active' : ''}`} onClick={() => handleSelecaoAba('backlog')}>
              <Bookmark size={16} color="#f39c12" />
              <span>Pra Jogar</span>
              <span className="count-badge">{count('estado', 'backlog')}</span>
            </div>

            <div className={`menu-item ${abaAtiva === 'zerados' ? 'active' : ''}`} onClick={() => handleSelecaoAba('zerados')}>
              <CheckCircle2 size={16} color="#2ecc71" />
              <span>Zerados</span>
              <span className="count-badge">{countFlag('zerado')}</span>
            </div>

            <div className={`menu-item ${abaAtiva === 'platinas' ? 'active' : ''}`} onClick={() => handleSelecaoAba('platinas')}>
              <Trophy size={16} color="#00d4ff" />
              <span>Platinados</span>
              <span className="count-badge">{countFlag('platinado')}</span>
            </div>

            <div className={`menu-item ${abaAtiva === 'dropados' ? 'active' : ''}`} onClick={() => handleSelecaoAba('dropados')}>
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
            <div className={`menu-item ${abaAtiva === 'franquias' ? 'active' : ''}`} onClick={() => handleSelecaoAba('franquias')}>
              <FolderTree size={16} />
              <span>Por Franquia</span>
            </div>

            <div className={`menu-item ${abaAtiva === 'tierlist' ? 'active' : ''}`} onClick={() => handleSelecaoAba('tierlist')}>
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
            <Filters onFilterChange={(filtros) => { onFilterChange(filtros); if(window.innerWidth < 768) setSidebarVisivel(false); }} />
          </NavGroup>

        </nav>
      </aside>
    </>
  );
};

export default Sidebar;