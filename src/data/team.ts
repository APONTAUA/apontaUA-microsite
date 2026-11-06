interface Profile {
	name: string;
	role: string;
	/** Optional portrait path, e.g. `/team/daniel-simbe.webp` for a file in `public/team/`. */
	image?: string;
}

interface TeamMember extends Profile {
	github: string;
}

export const team: TeamMember[] = [
	{ name: 'Daniel Simbe', github: 'https://github.com/dani1244', role: 'FullStack and DevOps Engineer.' },
	{ name: 'Anderson Tembe', github: 'https://github.com/AndersonTembe', role: 'FullStack Dev.' },
	{ name: 'Giovanni Santos', github: 'https://github.com/Cheiivan', role: 'BackEnd and Architecture Engineer.' },
	{ name: 'Felizardo Samuel', github: 'https://github.com/Zardo171817', role: 'QA Analyst and FrontEnd Dev.' },
	{ name: 'Marcelo Junior', github: 'https://github.com/MarceloJunior016', role: 'FrontEnd Dev.' },
	{ name: 'Keegan Azevedo', github: 'https://github.com/KeeganAzevedo', role: 'BackEnd Dev.' },
];

export const advisors: Profile[] = [
	{ name: 'João Paulo Barraca', role: 'Supervisor' },
	{ name: 'Catarina Silva', role: 'Co-Supervisor' },
];
