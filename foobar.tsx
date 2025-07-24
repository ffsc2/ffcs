import React from 'react';

// Generic List Props
type ListProps<T> = {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  onItemClick?: (item: T) => void;
};

function List<T>({ items, renderItem, onItemClick }: ListProps<T>) {
  return (
    <ul>
      {items.map((item, index) => (
        <li
          key={index}
          onClick={() => onItemClick?.(item)}
          style={{ cursor: onItemClick ? 'pointer' : 'default' }}
        >
          {renderItem(item, index)}
        </li>
      ))}

      <div>
        one level up
        <div>
          nested
          <div>
            one level down
          </div>
        </div>
      </div>
    </ul>
  );
}

export default List;
