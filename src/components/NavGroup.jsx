import { ChevronDown, ChevronUp } from 'lucide-react';

const NavGroup = ({ title, icon: IconComponent, isOpen, onToggle, children }) => {
  return (
    <div className="nav-group">
      <div className={`nav-header ${isOpen ? 'active' : ''}`} onClick={onToggle}>
        <div className="header-title">
        
          {IconComponent && <IconComponent size={18} />}
          <span>{title}</span>
        </div>
        {isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
      </div>
      <div className={`nav-submenu ${isOpen ? 'open' : ''}`}>
        <div className="submenu-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default NavGroup;