import React from 'react';
import styles from './RequirementTable.module.css';

export default function RequirementTable({ requirements }) {
  return (
    <details className={styles.details}>
      <summary>{requirements.length} requirements · expand table</summary>
      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead><tr><th scope="col">ID</th><th scope="col">Requirement (source wording)</th><th scope="col">Priority</th></tr></thead>
          <tbody>{requirements.map(({ id, description, priority }) => (
            <tr key={id}><th scope="row"><code>{id}</code></th><td>{description}</td><td><span className={`${styles.priority} ${styles[priority.toLowerCase()]}`}>{priority}</span></td></tr>
          ))}</tbody>
        </table>
      </div>
    </details>
  );
}
