import React from 'react';
import Link from '@docusaurus/Link';
import styles from './Timeline.module.css';

const labels = { done: 'Completed', current: 'In progress', upcoming: 'Upcoming' };

export default function Timeline({ milestones }) {
	return (
		<ol className={styles.timeline}>
			{milestones.map((milestone) => (
				<li key={milestone.code} className={styles[milestone.status]}>
					<span className={styles.dot} aria-hidden="true" />
					<Link className={styles.card} to={milestone.href}>
						<span className={styles.meta}><span className={styles.code}>{milestone.code}</span><span className={styles.status}>{labels[milestone.status]}</span></span>
						<strong>{milestone.title}</strong>
						<span className={styles.date}>{milestone.date}</span>
					</Link>
				</li>
			))}
		</ol>
	);
}
