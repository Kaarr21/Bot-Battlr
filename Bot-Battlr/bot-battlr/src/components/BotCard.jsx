import React from 'react';
import './BotCard.css';

export default function BotCard({ bot, onClick, onDelete }) {
  return (
    <div className="bot-card" onClick={() => onClick(bot)}>
      <img src={bot.avatar_url} alt={bot.name} className="bot-image" />
      <h2 className="bot-name">{bot.name}</h2>
      <p className="bot-catchphrase">"{bot.catchphrase}"</p>
      <div className="bot-stats">
        <span>Class: {bot.bot_class}</span>
        <span>Health: {bot.health}</span>
        <span>Damage: {bot.damage}</span>
        <span>Armor: {bot.armor}</span>
      </div>
      {onDelete && (
        <button
          className="delete-button"
          onClick={(e) => {
            e.stopPropagation();
            onDelete(bot.id);
          }}>
          x
        </button>
      )}
    </div>
  );
}
