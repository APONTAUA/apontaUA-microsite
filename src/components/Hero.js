import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './Hero.module.css';

export default function Hero() {
	const illustration = useBaseUrl('/img/apontaua-hero.svg');
	return (
		<header className={styles.banner}>
			<div className={styles.inner}>
				<div className={styles.copy}>
					<h1>ApontaUA</h1>
					<p className={styles.tagline}>A collaborative home for academic knowledge at DETI.</p>
					<div className={styles.actions}>
						<Link className={styles.primary} to="/docs/">Explore Documentation</Link>
						<Link className={styles.secondary} href="https://github.com/APONTAUA" target="_blank" rel="noopener noreferrer">
							GitHub <span aria-hidden="true">↗</span>
						</Link>
					</div>
				</div>
				<img
					className={styles.illustration}
					src={illustration}
					alt="A shared study space connecting notes, a notebook, flashcards and a PDF document"
					width="520"
					height="420"
				/>
			</div>
		</header>
	);
}
