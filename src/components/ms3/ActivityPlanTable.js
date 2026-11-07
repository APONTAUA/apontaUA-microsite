import React from 'react';
import { activityPlan } from '@site/src/data/ms3/activityPlan';
import styles from './ActivityPlanTable.module.css';

export default function ActivityPlanTable() {
  return (
    <div className={styles.scrollRegion} role="region" aria-label="MS3 and MS4 activity plan table" tabIndex={0}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Task List</th>
            <th scope="col">Description</th>
            <th scope="col">Deliverables</th>
          </tr>
        </thead>
        <tbody>
          {activityPlan.map((iteration) => (
            <tr key={iteration.iteration} className={iteration.iteration === 'MS4' ? styles.milestoneRow : undefined}>
              <th scope="row" className={styles.dateCell}>
                <span className={styles.iteration}>{iteration.iteration}</span>
                <span>{iteration.date}</span>
                {iteration.events?.map((event) => (
                  <span className={styles.event} key={event.label}>
                    <strong>{event.label}</strong>
                    <span>{event.date}</span>
                  </span>
                ))}
              </th>
              <td>
                <ol className={styles.taskList}>
                  {iteration.tasks.map(([task, owners], index) => (
                    <li key={task}>
                      <span>{task}</span>
                      <span className={styles.owner}> — <strong>Responsible:</strong> {owners}</span>
                    </li>
                  ))}
                </ol>
              </td>
              <td>{iteration.description}</td>
              <td>{iteration.deliverables}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
