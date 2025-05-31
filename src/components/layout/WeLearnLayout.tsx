import React, { ReactNode, useState } from 'react';
import '../../styles/welearn-core.css';

interface WeLearnLayoutProps {
  children: ReactNode;
  showSidebar?: boolean;
}

const WeLearnLayout: React.FC<WeLearnLayoutProps> = ({ 
  children, 
  showSidebar = true 
}) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  return (
    <div className="wl-flex-layout">
      <div className="wl-main-content">
        {children}
      </div>
    </div>
  );
};

export default WeLearnLayout;