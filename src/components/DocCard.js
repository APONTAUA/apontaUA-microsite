import React from 'react';
import styles from './DocCard.module.css';

export function CardGrid({ children }) {
	return <div className={styles.grid}>{children}</div>;
}

export function LinkCard({ title, description, href }) {
	return (
		<a className={styles.card} href={href}>
			<strong>{title}</strong>
			<span>{description}</span>
			<span className={styles.open}>Open <span aria-hidden="true">→</span></span>
		</a>
	);
}
