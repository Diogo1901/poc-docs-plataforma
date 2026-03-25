import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
			title: 'Minha Plataforma de Docs',
			base: '/poc-docs-plataforma',
			sidebar: [
				{
					label: 'Documentação',
					autogenerate: { directory: '' }, // <--- ISTO É A MAGIA!
				},
			],
		}),
	],
});