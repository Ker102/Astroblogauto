// @ts-check

import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://ker102.github.io/Astroblogauto/',
	base: '/Astroblogauto',
	integrations: [mdx(), react(), sitemap()],
});
