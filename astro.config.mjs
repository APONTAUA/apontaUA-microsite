// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://apontaua.github.io',
	base: '/apontaUA-microsite',
	
	integrations: [
		starlight({
			title: 'ApontaUA',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/APONTAUA' }],
			sidebar: [
				{
					label: 'Milestones',
					items: [
						{ autogenerate: { directory: 'Milestones' } }
					],
				},
			],
		}),
	],
});
