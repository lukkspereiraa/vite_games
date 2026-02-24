import { useEffect, useState } from 'react';
import { CheckCircle2, ArrowRight, Plus, AlertCircle } from 'lucide-react';
import './Notification.css';

const Notification = ({ data, onGoToLibrary, onClose }) => {
  const { jogo, tipo } = data;
  const [progress, setProgress] = useState(100);

  const isExistente = tipo === 'existe';

  useEffect(() => {
  

    const duration = 5000;
    const intervalTime = 50; 
    const step = 100 / (duration / intervalTime);

    const timer = setTimeout(() => {
      onClose();
    }, duration);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev <= 0) return 0;
        return prev - step;
      });
    }, intervalTime);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [data, onClose]); 

  return (
    <div className={`popup-notification ${isExistente ? 'type-exists' : 'type-success'}`}>
      <div className="popup-content">
        <div className="popup-icon">
          {isExistente ? (
            <AlertCircle color="#f1c40f" size={24} />
          ) : (
            <CheckCircle2 color="#2ecc71" size={24} />
          )}
        </div>
        
        <div className="popup-text">
          <h4>{jogo.name}</h4>
          <p>{isExistente ? 'Já está na sua biblioteca!' : 'Adicionado com sucesso!'}</p>
        </div>

        <div className="popup-actions">
          {!isExistente && (
            <button className="btn-add-more" onClick={onClose}>
              <Plus size={14} /> MAIS
            </button>
          )}
          <button className="btn-go-library" onClick={onGoToLibrary}>
            VER LISTA <ArrowRight size={14} />
          </button>
        </div>
      </div>
      
      <div className="progress-bar-container">
        <div 
          className="progress-bar" 
          style={{ width: `${progress}%` }} 
        />
      </div>
    </div>
  );
};

export default Notification;