import React from 'react';
import Layout from '@theme/Layout';
import TeamCard from '@site/src/components/TeamCard';
import { advisors, team } from '@site/src/data/team';
import styles from './team.module.css';

export default function Team() {
	return (
		<Layout title="Team" description="The ApontaUA team and project advisors.">
			<main className={styles.main}>
				<h1>Team</h1>
				<section aria-labelledby="members-heading">
					<h2 id="members-heading">Members</h2>
					<div className={`${styles.grid} ${styles.members}`}>
						{team.map((member) => <TeamCard key={member.name} {...member} />)}
					</div>
				</section>
				<section aria-labelledby="advisors-heading">
					<h2 id="advisors-heading">Project Advisors</h2>
					<div className={`${styles.grid} ${styles.advisors}`}>
						{advisors.map((advisor) => <TeamCard key={advisor.name} {...advisor} role={`${advisor.role} · PEI Group 17`} />)}
					</div>
				</section>
			</main>
		</Layout>
	);
}
