import React from 'react';
import BotCard from './BotCard';
import './BotCollection.css';

export default function BotCollection({ bots, onViewDetails }) {
  return (
    <div className="bot-grid">
      {bots.map(bot => (
        <BotCard key={bot.id} bot={bot} onClick={onViewDetails} />
      ))}
    </div>
  );
}