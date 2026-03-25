import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	// ESTAS DUAS FICAM AQUI (Configuração global do Astro)
	site: 'https://Diogo1901.github.io',
	base: '/poc-docs-plataforma', 

	integrations: [
		starlight({
			title: 'Minha Plataforma de Docs',
			sidebar: [
				{
					label: 'Documentação',
					autogenerate: { directory: '' },
				},
			],
		}),
	],
});