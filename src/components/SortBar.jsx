import React from 'react';
import './SortBar.css';

export default function SortBar({ onSortChange, onClassFilterChange, selectedClasses }) {
  const botClasses = ["Support", "Medic", "Assault", "Defender", "Captain", "Witch"];

  return (
    <div className="sort-bar">
      <div>
        <label>Sort by:</label>
        <select onChange={e => onSortChange(e.target.value)}>
          <option value="">None</option>
          <option value="health">Health</option>
          <option value="damage">Damage</option>
          <option value="armor">Armor</option>
        </select>
      </div>
      <div>
        <label>Filter by Class:</label>
        {botClasses.map(cls => (
          <label key={cls} className="filter-option">
            <input
              type="checkbox"
              value={cls}
              checked={selectedClasses.includes(cls)}
              onChange={() => onClassFilterChange(cls)}
            />
            {cls}
          </label>
        ))}
      </div>
    </div>
  );
}
