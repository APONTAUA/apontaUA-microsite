import React from 'react';
import styles from './StatCards.module.css';

export default function StatCards({ items }) {
  return (
    <div className={styles.grid}>
      {items.map(({ value, label, note }) => (
        <article className={styles.card} key={`${value}-${label}`}>
          <strong className={styles.value}>{value}</strong>
          <span className={styles.label}>{label}</span>
          {note && <small>{note}</small>}
        </article>
      ))}
    </div>
  );
}
