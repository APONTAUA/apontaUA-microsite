import React from 'react';
import Layout from '@theme/Layout';
import Hero from '@site/src/components/Hero';
import Mission from '@site/src/components/Mission';
import Reveal from '@site/src/components/Reveal';
import Timeline from '@site/src/components/Timeline';
import { CardGrid, LinkCard } from '@site/src/components/DocCard';
import { milestones } from '@site/src/data/milestones';
import styles from './index.module.css';

export default function Home() {
	return (
		<Layout title="ApontaUA" description="A collaborative platform for discovering and sharing DETI study materials.">
			<Hero />
			<main className={styles.main}>
				<Mission title="Knowledge, easier to find">
					Study materials are dispersed across different sources, repeated effort is common, and there is no shared structure for organization and validation. ApontaUA proposes a collaborative system to centralize, organize, discover and improve academic documents for the DETI community.
				</Mission>

				<section className="reveal" aria-labelledby="explore-heading">
					<h2 id="explore-heading">Explore the project</h2>
					<CardGrid>
						<LinkCard title="Documentation" description="Browse milestones, meeting notes and project deliverables." href="/apontaUA-microsite/docs/" />
						<LinkCard title="Project Summary" description="Read the motivation, goals and proposed solution." href="/apontaUA-microsite/docs/summary/" />
						<LinkCard title="Development Team" description="Meet the students and project supervisors." href="/apontaUA-microsite/team/" />
					</CardGrid>
				</section>

				<section className="reveal" aria-labelledby="phase-heading">
					<h2 id="phase-heading">Current phase</h2>
					<p>The project is in <strong>Semester 1 (2026/2027)</strong>. Follow the milestone roadmap and explore the API documentation status.</p>
					<Timeline milestones={milestones} />
					<p className={styles.phaseLinks}>
						<a href="/apontaUA-microsite/docs/milestones/">Milestone roadmap</a>
						<a href="/apontaUA-microsite/docs/api-reference/">API Reference status</a>
					</p>
				</section>
			</main>
			<Reveal />
		</Layout>
	);
}
