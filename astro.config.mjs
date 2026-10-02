// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://cheiivan.github.io',
  	base: '/apontaUA-microsite',
	
	integrations: [
		starlight({
			title: 'ApontaUA',
			social: [{ icon: 'github', label: 'GitHub', href: '' }],
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
