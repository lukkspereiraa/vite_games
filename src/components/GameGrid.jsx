import GameCard from './GameCard';
import './GameGrid.css';

const GameGrid = ({ 
  jogos = [], 
  loading, 
  onAdd, 
  onRemove, 
  onComplete, 
  onSelectGame, 
  onOpenOpinions, 
  abaAtiva 
}) => {
  
  if (loading && jogos.length === 0) {
    return (
      <div className="loader-container">
        <div className="spinner"></div>
        <p>SINCRONIZANDO COM O VAULT...</p>
      </div>
    );
  }

  if (!loading && jogos.length === 0) {
    return (
      <div className="empty-state">
        <p>Nenhum jogo encontrado nesta seção.</p>
      </div>
    );
  }

  return (
    <div className="game-grid">
      {jogos.map((jogo) => (
        <GameCard 
          key={`${jogo.id}-${abaAtiva}`} 
          jogo={jogo} 
          onAdd={onAdd}
          onRemove={onRemove}
          onComplete={onComplete}
          onSelectGame={onSelectGame} 
          onOpenOpinions={onOpenOpinions} 
          abaAtiva={abaAtiva}
        />
      ))}
    </div>
  );
};

export default GameGrid;