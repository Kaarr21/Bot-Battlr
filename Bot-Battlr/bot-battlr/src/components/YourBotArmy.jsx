import React from 'react';
import BotCard from './BotCard';
import './YourBotArmy.css';

export default function YourBotArmy({ army, onRelease, onDischarge }) {
  return (
    <div className="your-army">
      <h2>Your Bot Army</h2>
      <div className="army-grid">
        {army.map(bot => (
          <BotCard
            key={bot.id}
            bot={bot}
            onClick={onRelease}
            onDelete={onDischarge}
          />
        ))}
      </div>
    </div>
  );
}



