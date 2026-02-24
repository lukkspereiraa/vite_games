import { useEffect, useState } from 'react';
import { X, Star, Calendar, Globe, Image as ImageIcon } from 'lucide-react';
import './GameModal.css';

const API_KEY = import.meta.env.VITE_API_KEY;

const GameModal = ({ gameId, onClose }) => {
  const [detalhes, setDetalhes] = useState(null);
  const [screenshots, setScreenshots] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDados = async () => {
      setLoading(true);
      try {
        const [resDetalhes, resScreenshots] = await Promise.all([
          fetch(`https://api.rawg.io/api/games/${gameId}?key=${API_KEY}`),
          fetch(`https://api.rawg.io/api/games/${gameId}/screenshots?key=${API_KEY}`)
        ]);

        const dataDetalhes = await resDetalhes.json();
        const dataScreenshots = await resScreenshots.json();

        setDetalhes(dataDetalhes);
        setScreenshots(dataScreenshots.results || []);
      } catch (e) {
        console.error("Erro ao carregar dados do jogo:", e);
      } finally {
        setLoading(false);
      }
    };

    if (gameId) fetchDados();
  }, [gameId]);

  if (loading) return (
    <div className="modal-overlay">
      <div className="spinner"></div>
    </div>
  );

  if (!detalhes) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}><X /></button>
        
        {/* Banner */}
        <div className="modal-header" style={{ backgroundImage: `url(${detalhes.background_image_additional || detalhes.background_image})` }}>
          <div className="header-overlay">
            <h1>{detalhes.name}</h1>
            <div className="modal-info-bar">
              <span className="badge-metacritic"><Star size={14} fill="#f1c40f" color="#f1c40f" /> {detalhes.metacritic || 'N/A'}</span>
              <span className="badge-date"><Calendar size={14} /> {new Date(detalhes.released).toLocaleDateString()}</span>
            </div>
          </div>
        </div>

        <div className="modal-body">
          
          {/* SEÇÃO DE GAMEPLAY */}
          {screenshots.length > 0 && (
            <div className="screenshots-section">
              <h3><ImageIcon size={18} /> GAMEPLAY</h3>
              <div className="screenshot-container">
                <div className="screenshot-track">
                  {screenshots.map(screen => (
                    <img key={screen.id} src={screen.image} alt="Gameplay" className="screenshot-img" />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* SEÇÃO SOBRE */}
          <div className="about-section">
            <h3>SOBRE</h3>
            <p className="description">
              {detalhes.description_raw || "Nenhuma descrição disponível para este título."}
            </p>
          </div>
          
          {/* BOTÃO DO SITE OFICIAL*/}
          {detalhes.website && (
            <a href={detalhes.website} target="_blank" rel="noreferrer" className="official-site-link">
              <div className="link-content">
                <Globe size={20} />
                <span>VISITAR WEBSITE OFICIAL</span>
              </div>
              <div className="link-external-icon">↗</div>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default GameModal;