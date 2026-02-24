import React, { useState, useEffect, useCallback } from 'react';
import { getGames } from './services/api';
import Sidebar from './components/Sidebar';
import GameGrid from './components/GameGrid';
import GameModal from './components/GameModal';
import UserPanel from './components/UserPanel';
import './App.css';

function App() {
  const [jogos, setJogos] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [busca, setBusca] = useState('');
  const [filtros, setFiltros] = useState({ genre: '', order: '' });
  const [loading, setLoading] = useState(false);
  const [abaAtiva, setAbaAtiva] = useState('explorar');
  
  const [gameSelecionado, setGameSelecionado] = useState(null); 
  const [jogoParaOpiniao, setJogoParaOpiniao] = useState(null); 

  const [minhaLista, setMinhaLista] = useState(() => {
    const salvo = localStorage.getItem('@GameVault:lista');
    return salvo ? JSON.parse(salvo) : [];
  });

  useEffect(() => {
    localStorage.setItem('@GameVault:lista', JSON.stringify(minhaLista));
  }, [minhaLista]);

  const carregarDados = useCallback(async (resetarLista = false) => {
    if (abaAtiva !== 'explorar') return; 
    if (loading && !resetarLista) return;
    
    setLoading(true);
    try {
      const p = resetarLista ? 1 : pagina;
      const novosJogos = await getGames(busca, filtros, p);
      if (Array.isArray(novosJogos)) {
        setJogos(prev => {
          if (resetarLista) return novosJogos;
          const idsExistentes = new Set(prev.map(j => j.id));
          return [...prev, ...novosJogos.filter(j => !idsExistentes.has(j.id))];
        });
      }
    } catch (e) { console.error(e); } finally { setLoading(false); }
  }, [busca, filtros, pagina, abaAtiva, loading]);

  useEffect(() => {
    if (abaAtiva === 'explorar') {
      setPagina(1);
      carregarDados(true);
    }
  }, [busca, filtros, abaAtiva]);

  useEffect(() => {
    if (pagina > 1 && abaAtiva === 'explorar') carregarDados(false);
  }, [pagina]);

  const adicionarABiblioteca = (jogo) => {
    if (!minhaLista.find(item => item.id === jogo.id)) {
      setMinhaLista(prev => [...prev, { 
        ...jogo, 
        estado: 'backlog',
        zerado: false,
        platinado: false,
        franquia: '',
        notaPessoal: '',
        comentario: '' 
      }]);
    }
  };

  const atualizarDadosPessoais = (id, novosDados) => {
    setMinhaLista(prev => prev.map(j => 
      j.id === id ? { ...j, ...novosDados } : j
    ));
  };

  const removerDaBiblioteca = (id) => {
    setMinhaLista(prev => prev.filter(j => j.id !== id));
  };


  const getJogosParaExibir = () => {
    if (abaAtiva === 'explorar') return jogos;

    let lista = [];


    switch (abaAtiva) {
      case 'biblioteca': lista = [...minhaLista]; break;
      case 'jogando':    lista = minhaLista.filter(j => j.estado === 'jogando'); break;
      case 'backlog':    lista = minhaLista.filter(j => j.estado === 'backlog'); break;
      case 'dropados':   lista = minhaLista.filter(j => j.estado === 'dropado'); break;
      case 'zerados':    lista = minhaLista.filter(j => j.zerado === true); break;
      case 'platinas':   lista = minhaLista.filter(j => j.platinado === true); break;
      case 'franquias':  lista = minhaLista.filter(j => j.franquia?.trim()); break;
      case 'tierlist':   lista = minhaLista.filter(j => j.notaPessoal); break;
      default: lista = [...minhaLista];
    }

    if (busca.trim() !== '') {
      lista = lista.filter(j => j.name.toLowerCase().includes(busca.toLowerCase()));
    }


    if (filtros.genre) {
      lista = lista.filter(j => j.genres?.some(g => g.slug === filtros.genre));
    }

    lista.sort((a, b) => {
      if (!filtros.order && abaAtiva === 'tierlist') {
        return parseFloat(b.notaPessoal) - parseFloat(a.notaPessoal);
      }

      switch (filtros.order) {
        case 'name': return a.name.localeCompare(b.name); 
        case '-name': return b.name.localeCompare(a.name); 
        case '-released': return new Date(b.released) - new Date(a.released); 
        case 'released': return new Date(a.released) - new Date(b.released); 
        case '-metacritic': return (b.metacritic || 0) - (a.metacritic || 0); 
        default: return 0;
      }
    });

    return lista;
  };

  const jogosExibidos = getJogosParaExibir();

  return (
    <div className="app-container">
      <Sidebar
        onSearch={setBusca}
        onFilterChange={(t, v) => setFiltros(p => ({ ...p, [t]: v }))}
        onSelectAba={setAbaAtiva}
        abaAtiva={abaAtiva}
        minhaLista={minhaLista}
      />

      <main className="main-content">
        <header className="content-header">
          <div className="header-text">
            <h1>{abaAtiva.replace('-', ' ').toUpperCase()}</h1>
            <p>
              {busca ? `Buscando "${busca}" em ` : ''} 
              {jogosExibidos.length} jogos
            </p>
          </div>
        </header>

        <GameGrid
          jogos={jogosExibidos}
          loading={loading}
          onAdd={adicionarABiblioteca}
          onRemove={removerDaBiblioteca}
          onSelectGame={setGameSelecionado}
          onOpenOpinions={setJogoParaOpiniao}
          abaAtiva={abaAtiva} 
        />

        {abaAtiva === 'explorar' && !loading && (
          <button className="load-more-btn" onClick={() => setPagina(p => p + 1)}>
            CARREGAR MAIS
          </button>
        )}
      </main>

      {gameSelecionado && (
        <GameModal 
          gameId={gameSelecionado} 
          onClose={() => setGameSelecionado(null)} 
        />
      )}

      {jogoParaOpiniao && (
        <UserPanel 
          jogo={jogoParaOpiniao}
          onClose={() => setJogoParaOpiniao(null)}
          onUpdate={atualizarDadosPessoais}
        />
      )}
    </div>
  );
}

export default App;