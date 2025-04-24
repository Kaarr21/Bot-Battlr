import React, { useEffect, useState } from 'react';
import { getBots, deleteBot } from './api';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import BotSpecs from './components/BotSpecs';
import SortBar from './components/SortBar';
import './App.css';

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortKey, setSortKey] = useState('');
  const [selectedClasses, setSelectedClasses] = useState([]);

  useEffect(() => {
    getBots()
      .then(data => setBots(data))
      .catch(() => setError('Failed to fetch bots.'))
      .finally(() => setLoading(false));
  }, []);

  const enlistBot = (bot) => {
    if (!army.find(b => b.id === bot.id)) {
      setArmy(prev => [...prev, bot]);
    }
    setSelectedBot(null);
  };

  const releaseBot = (bot) => {
    setArmy(prev => prev.filter(b => b.id !== bot.id));
  };

  const dischargeBot = async (id) => {
    try {
      await deleteBot(id);
      setArmy(prev => prev.filter(b => b.id !== id));
      setBots(prev => prev.filter(b => b.id !== id));
    } catch {
      setError('Failed to discharge bot.');
    }
  };

  const handleSortChange = (key) => {
    setSortKey(key);
  };

  const handleClassFilterChange = (cls) => {
    setSelectedClasses(prev =>
      prev.includes(cls) ? prev.filter(c => c !== cls) : [...prev, cls]
    );
  };

  const filteredAndSortedBots = bots
    .filter(bot =>
      selectedClasses.length === 0 || selectedClasses.includes(bot.bot_class)
    )
    .sort((a, b) => {
      if (!sortKey) return 0;
      return b[sortKey] - a[sortKey];
    });

  return (
    <div className="app">
      <h1>Bot Battlr</h1>
      {error && <p className="error">{error}</p>}
      {loading ? (
        <p>Loading bots...</p>
      ) : (
        <>
          <YourBotArmy army={army} onRelease={releaseBot} onDischarge={dischargeBot} />
          <h2>Available Bots</h2>
          <SortBar
            onSortChange={handleSortChange}
            onClassFilterChange={handleClassFilterChange}
            selectedClasses={selectedClasses}
          />
          {selectedBot ? (
            <BotSpecs
              bot={selectedBot}
              onEnlist={enlistBot}
              onBack={() => setSelectedBot(null)}
            />
          ) : (
            <BotCollection bots={filteredAndSortedBots} onViewDetails={setSelectedBot} />
          )}
        </>
      )}
    </div>
  );
}

export default App;