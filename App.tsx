import React from 'react';
import { HashRouter, Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './views/Home';
import { Foundation } from './views/Foundation';
import { Habits } from './views/Habits';
import { Focus } from './views/Focus';
import { ViewState } from './types';

const AppContent: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const getCurrentView = (): ViewState => {
    const path = location.pathname.slice(1).toUpperCase(); // remove leading slash
    if (path === '' || path === 'CHECK_IN') return ViewState.CHECK_IN;
    return path as ViewState;
  };

  const handleNavigate = (view: ViewState) => {
    if (view === ViewState.CHECK_IN) {
      navigate('/');
    } else {
      navigate(`/${view.toLowerCase()}`);
    }
  };

  return (
    <Layout currentView={getCurrentView()} onNavigate={handleNavigate}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/foundation" element={<Foundation />} />
        <Route path="/habits" element={<Habits />} />
        <Route path="/focus" element={<Focus />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
};

export default App;
