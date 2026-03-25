import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
			title: 'Minha Plataforma de Docs',
			sidebar: [
				{
					label: 'Documentação',
					autogenerate: { directory: '' }, // <--- ISTO É A MAGIA!
				},
			],
		}),
	],
});