import { Plus, Trash2, Info, Star, FolderTree, Trophy, MessageSquare, CheckCircle2 } from 'lucide-react';
import './GameCard.css';

const GameCard = ({ jogo, onAdd, onRemove, onSelectGame, onOpenOpinions, abaAtiva }) => {
  const isExplorar = !abaAtiva || abaAtiva === 'explorar';

  // Configuração das etiquetas de estado
  const getEstadoInfo = () => {
    if (isExplorar) return null;
    const estados = {
      'backlog': { text: 'BACKLOG', color: '#f39c12' },
      'jogando': { text: 'JOGANDO', color: '#3498db' },
      'quero-jogar': { text: 'WISHLIST', color: '#9b59b6' },
      'dropado': { text: 'DROPADO', color: '#e74c3c' },
      'concluido': { text: 'FINALIZADO', color: '#2ecc71' }
    };
    return estados[jogo.estado] || null;
  };

  const infoEstado = getEstadoInfo();

  const getScoreClass = (score) => {
    if (score >= 75) return 'score-high';
    if (score >= 50) return 'score-avg';
    return 'score-low';
  };

  return (
    <div className={`game-card ${!isExplorar && jogo.zerado ? 'card-zerado' : ''} ${!isExplorar && jogo.platinado ? 'card-platinado' : ''}`}>
      
      <div className="image-container" onClick={() => onSelectGame(jogo.id)}>
        <img src={jogo.background_image} alt={jogo.name} className="game-image" />
        
        {/* Metacritic */}
        {jogo.metacritic && <div className={`metacritic-badge ${getScoreClass(jogo.metacritic)}`}>{jogo.metacritic}</div>}

        {/* Etiqueta de Estado */}
        {infoEstado && (
          <div className="estado-badge" style={{ backgroundColor: infoEstado.color }}>
            {infoEstado.text}
          </div>
        )}

        {/* Ícone */}
        {!isExplorar && jogo.platinado && (
          <div className="platinado-icon-badge">
            <Trophy size={16} fill="#00d4ff" />
          </div>
        )}

        <div className="card-overlay">
          <Info size={32} color="white" />
          <span>DETALHES</span>
        </div>
      </div>
      
      <div className="card-content">
        <h3 className="game-title" onClick={() => onSelectGame(jogo.id)}>{jogo.name}</h3>

        <div className="tags-row">
          {!isExplorar && jogo.zerado && (
            <div className="zerado-tag">
              <CheckCircle2 size={12} /> ZERADO
            </div>
          )}
          
          {!isExplorar && jogo.notaPessoal && (
            <div className="personal-score-tag">
              <Star size={10} fill="currentColor" /> {jogo.notaPessoal}
            </div>
          )}
        </div>

        {!isExplorar && jogo.franquia && (
          <div className="game-franchise">
            <FolderTree size={12} /> <span>{jogo.franquia}</span>
          </div>
        )}
        
        <div className="card-footer">
          {isExplorar ? (
            <button className="btn-neon-add" onClick={(e) => { e.stopPropagation(); onAdd(jogo); }}>
              <Plus size={18} strokeWidth={3} />
              <span>BIBLIOTECA</span>
            </button>
          ) : (
            <div className="action-group">
              <button className="btn-action btn-opinions" onClick={(e) => { e.stopPropagation(); onOpenOpinions(jogo); }}>
                <MessageSquare size={20} />
              </button>
              <button className="btn-action btn-delete" onClick={(e) => { e.stopPropagation(); onRemove(jogo.id); }}>
                <Trash2 size={20} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GameCard;