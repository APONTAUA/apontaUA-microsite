const fs = require('node:fs');
const path = require('node:path');
const { themes: prismThemes } = require('prism-react-renderer');

const apiSpecsDirectory = path.join(__dirname, 'static/openapi');
const apiSpecs = fs.existsSync(apiSpecsDirectory)
  ? fs.readdirSync(apiSpecsDirectory)
      .filter((file) => file.endsWith('.json'))
      .sort()
      .map((file) => ({ id: path.basename(file, '.json'), content: require(path.join(apiSpecsDirectory, file)) }))
      .filter(({ content }) => content && (content.openapi || content.swagger))
  : [];

const config = {
  title: 'ApontaUA',
  tagline: 'Materiais académicos partilhados, organizados e acessíveis.',
  favicon: 'img/favicon.svg',
  url: 'https://apontaua.github.io',
  baseUrl: '/apontaUA-microsite/',
  organizationName: 'APONTAUA',
  projectName: 'apontaUA-microsite',
  deploymentBranch: 'gh-pages',
  trailingSlash: true,
  onBrokenLinks: 'throw',
  markdown: { hooks: { onBrokenMarkdownLinks: 'warn' } },
  i18n: { defaultLocale: 'en', locales: ['en'] },
  presets: [[
    '@docusaurus/preset-classic',
    {
      docs: {
        sidebarPath: require.resolve('./sidebars.js'),
        routeBasePath: 'docs',
        sidebarCollapsible: true,
        showLastUpdateTime: false,
      },
      blog: false,
      theme: { customCss: require.resolve('./src/css/custom.css') },
    },
  ]],
  plugins: [
    [require.resolve('@easyops-cn/docusaurus-search-local'), {
      hashed: true,
      docsRouteBasePath: '/docs',
      docsDir: 'docs',
      indexDocs: true,
      indexPages: true,
      indexBlog: false,
      language: ['en', 'pt'],
    }],
    ...apiSpecs.map(({ id, content }) => [
      '@scalar/docusaurus',
      {
        id,
        route: `/api/${id}`,
        showNavLink: false,
        configuration: { spec: { content } },
      },
    ]),
  ],
  themeConfig: {
    colorMode: { defaultMode: 'dark', respectPrefersColorScheme: true },
    navbar: {
      title: 'ApontaUA',
      logo: { alt: 'ApontaUA', src: 'img/apontaua-logo.svg' },
      items: [
        { to: '/', label: 'Home', position: 'left', exact: true },
        { to: '/docs/summary', label: 'Summary', position: 'left' },
        { to: '/docs', label: 'Docs', position: 'left' },
        ...(apiSpecs.length
          ? [{ label: 'API Reference', position: 'left', items: apiSpecs.map(({ id }) => ({ label: id, to: `/api/${id}` })) }]
          : [{ to: '/docs/api-reference', label: 'API Reference', position: 'left' }]),
        { to: '/team', label: 'Team', position: 'left' },
        { href: 'https://github.com/APONTAUA/apontaUA-microsite', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        { title: 'Project', items: [{ label: 'Documentation', to: '/docs' }, { label: 'Team', to: '/team' }] },
        { title: 'Resources', items: [{ label: 'GitHub', href: 'https://github.com/APONTAUA/apontaUA-microsite' }, { label: 'MS1 presentation', href: 'https://apontaua.github.io/apontaUA-microsite/apresentacaoMS1.pdf' }] },
      ],
      copyright: `ApontaUA · University of Aveiro · ${new Date().getFullYear()}`,
    },
    tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 4 },
    prism: { theme: prismThemes.github, darkTheme: prismThemes.vsDark },
  },
};

module.exports = config;
