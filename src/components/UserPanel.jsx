import  { useState } from 'react';
import { X, Save, Trophy, Star, FolderTree, MessageSquare, Target, CheckCircle2, Circle } from 'lucide-react';
import './UserPanel.css';

const UserPanel = ({ jogo, onClose, onUpdate }) => {
  const [edit, setEdit] = useState({
    estado: jogo.estado || 'backlog',
    zerado: jogo.zerado || false,
    platinado: jogo.platinado || false,
    notaPessoal: jogo.notaPessoal || '',
    franquia: jogo.franquia || '',
    comentario: jogo.comentario || ''
  });

  const handleSalvar = () => {
    onUpdate(jogo.id, edit);
    onClose();
  };

  return (
    <div className="panel-overlay" onClick={onClose}>
      <div className="panel-content" onClick={e => e.stopPropagation()}>
        
        <button className="close-panel" onClick={onClose}>
          <X size={20} />
        </button>
        
        <header className="panel-header">
          <img src={jogo.background_image} alt={jogo.name} />
          <div className="header-overlay">
            <h2>{jogo.name}</h2>
          </div>
        </header>

        <div className="panel-body">
          
          {/* SELETOR DE ESTADO ATUAL */}
          <div className="input-group">
            <label><Target size={16} /> ESTADO DO JOGO</label>
            <select 
              value={edit.estado} 
              onChange={e => setEdit({...edit, estado: e.target.value})}
              className="estado-select"
            >
              <option value="backlog">Backlog (Não jogado)</option>
              <option value="jogando">Jogando agora</option>
              <option value="quero-jogar">Quero jogar / Desejo</option>
              <option value="dropado">Dropado / Desisti</option>
              <option value="concluido">Finalizado (Já parei)</option>
            </select>
          </div>

          {/* CONQUISTAS MULTISELEÇÃO */}
          <div className="input-group">
            <label>CONQUISTAS</label>
            <div className="status-selection-grid">
              <button 
                type="button"
                className={`status-btn ${edit.zerado ? 'active-zerado' : ''}`}
                onClick={() => setEdit({...edit, zerado: !edit.zerado})}
              >
                {edit.zerado ? <CheckCircle2 size={18} /> : <Circle size={18} />}
                <span>ZERADO</span>
              </button>

              <button 
                type="button"
                className={`status-btn ${edit.platinado ? 'active-platinado' : ''}`}
                onClick={() => setEdit({...edit, platinado: !edit.platinado})}
              >
                <Trophy size={18} />
                <span>PLATINADO</span>
              </button>
            </div>
          </div>

          <div className="input-group">
            <label><Star size={16} /> NOTA PESSOAL</label>
            <input 
              type="number" min="0" max="10" step="0.5" placeholder="0.0"
              value={edit.notaPessoal} 
              onChange={e => setEdit({...edit, notaPessoal: e.target.value})} 
            />
          </div>

          <div className="input-group">
            <label><FolderTree size={16} /> FRANQUIA</label>
            <input 
              type="text" placeholder="Ex: Resident Evil" 
              value={edit.franquia} 
              onChange={e => setEdit({...edit, franquia: e.target.value})} 
            />
          </div>

          <div className="input-group">
            <label><MessageSquare size={16} /> RESENHA</label>
            <textarea 
              placeholder="O que achou do jogo?"
              value={edit.comentario} 
              onChange={e => setEdit({...edit, comentario: e.target.value})} 
            />
          </div>

        </div>

        <div className="panel-footer">
          <button className="btn-save-panel" onClick={handleSalvar}>
            <Save size={18} />
            <span>SALVAR ALTERAÇÕES</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserPanel;