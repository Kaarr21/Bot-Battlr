import React from 'react';
import './BotCard.css';

export default function BotSpecs({ bot, onEnlist, onBack }) {
  if (!bot) return null;

  return (
    <div className="bot-card bot-specs">
      <img src={bot.avatar_url} alt={bot.name} className="bot-image" />
      <h2 className="bot-name">{bot.name}</h2>
      <p className="bot-catchphrase">"{bot.catchphrase}"</p>
      <div className="bot-stats">
        <span>Class: {bot.bot_class}</span>
        <span>Health: {bot.health}</span>
        <span>Damage: {bot.damage}</span>
        <span>Armor: {bot.armor}</span>
      </div>
      <div style={{ marginTop: '10px', display: 'flex', gap: '10px' }}>
        <button onClick={onBack}>Back</button>
        <button onClick={() => onEnlist(bot)}>Enlist</button>
      </div>
    </div>
  );
}
