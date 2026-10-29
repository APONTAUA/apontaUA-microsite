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
			logo: { src: './src/assets/logo.svg' },
			defaultLocale: 'root',
			locales: { root: { label: 'English', lang: 'en' } },
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/APONTAUA' }],
			customCss: ['./src/styles/custom.css'],
			components: {
				Hero: './src/components/Hero.astro',
				SocialIcons: './src/components/NavLinks.astro',
				Footer: './src/components/Footer.astro',
			},
			sidebar: [
				{
					label: 'Project',
					items: [
						{ label: 'Overview', slug: 'overview' },
						{ label: 'Team', slug: 'team' },
					],
				},
				{
					label: 'Milestones',
					items: [
						{ label: 'Roadmap', slug: 'milestones' },
						{
							label: 'Semester 1',
							items: [
								{ label: 'MS1 - Inception', collapsed: true, badge: { text: 'Done', variant: 'success' }, items: [{ autogenerate: { directory: 'milestones/semester-1/ms1' } }] },
								{ label: 'MS2 - Elaboration', badge: { text: 'WIP', variant: 'caution' }, items: [{ autogenerate: { directory: 'milestones/semester-1/ms2' } }] },
								{ label: 'MS3 - Construction', collapsed: true, items: [{ autogenerate: { directory: 'milestones/semester-1/ms3' } }] },
								{ label: 'Meetings', collapsed: true, items: [{ autogenerate: { directory: 'milestones/semester-1/meetings' } }] },
							],
						},
						{
							label: 'Semester 2',
							collapsed: true,
							items: [
								{ label: 'Overview', slug: 'milestones/semester-2' },
								{ label: 'Meetings', collapsed: true, items: [{ autogenerate: { directory: 'milestones/semester-2/meetings' } }] },
							],
						},
					],
				},
				{ label: 'Results', collapsed: true, items: [{ autogenerate: { directory: 'results' } }] },
			],
		}),
	],
});
