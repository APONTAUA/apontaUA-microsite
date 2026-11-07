import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './TeamCard.module.css';

function GitHubIcon() {
	return (
		<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
			<path fill="currentColor" d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.72 1.15 1.72 1.15 1 1.7 2.63 1.21 3.27.93.1-.72.4-1.21.71-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.06 1.14a10.65 10.65 0 0 1 5.57 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.12 2.95.71.78 1.14 1.77 1.14 2.99 0 4.29-2.62 5.23-5.11 5.51.4.34.76 1.01.76 2.04v3.03c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
		</svg>
	);
}

export default function TeamCard({ name, role, href, image }) {
	const imageUrl = image ? useBaseUrl(image) : undefined;
	const initials = name.split(/\s+/).slice(0, 2).map((part) => part[0]).join('').toUpperCase();
	return (
		<article className={styles.card}>
			<div className={styles.avatarFrame}>
				{imageUrl ? <img className={styles.avatar} src={imageUrl} alt={`${name} profile`} loading="lazy" /> :
					<span className={`${styles.avatar} ${styles.fallback}`} aria-hidden="true">{initials}</span>}
			</div>
			<div className={styles.content}>
				<strong>{name}</strong>
				<span className={styles.role}>{role}</span>
			</div>
			<div className={styles.links}>
				{href && <a href={href} target="_blank" rel="noopener noreferrer" aria-label={`${name} on GitHub`}><GitHubIcon /></a>}
			</div>
		</article>
	);
}
