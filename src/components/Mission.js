import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './Mission.module.css';

export default function Mission({ title, children }) {
	const logo = useBaseUrl('/img/apontaua-logo.svg');
	return (
		<section className={styles.mission}>
			<img src={logo} alt="" width="72" height="72" />
			<h2>{title}</h2>
			<div className={styles.text}>{children}</div>
		</section>
	);
}
