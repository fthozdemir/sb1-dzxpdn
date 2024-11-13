import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Search from './pages/Search';
import Saved from './pages/Saved';
import CreateCollection from './pages/CreateCollection';

function App() {
  return (
    <Router>
      <div className="flex flex-col lg:flex-row min-h-screen bg-zinc-950 text-white">
        <Sidebar />
        <main className="flex-1 p-4 lg:p-8 overflow-y-auto pt-16 lg:pt-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/saved" element={<Saved />} />
            <Route path="/create" element={<CreateCollection />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;