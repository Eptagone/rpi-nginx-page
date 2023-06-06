/**
 * Name: vite.config.ts
 * Description: Vite configuration file
 */

import { UserConfig } from 'vite';
import preact from '@preact/preset-vite';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

const cssPattern = /\.css$/;
const fontPattern = /\.(woff|woff2|eot|ttf|otf)$/;
const imagePattern = /\.(png|jpe?g|gif|svg|webp|avif)$/;

// Vite configuration
const config: UserConfig = {
	publicDir: 'src/public',
	server: {
		port: 5212,
	},
	build: {
		emptyOutDir: true,
		outDir: 'dist',
		assetsDir: '',
		rollupOptions: {
			input: 'index.html',
			output: {
				entryFileNames: 'js/[name].js',
				assetFileNames: (info) => {
					console.log(info.name ?? info);

					if (info.name) {
						// If the file is a CSS file, save it to the css folder
						if (cssPattern.test(info.name)) {
							return 'css/[name].[hash][extname]';
						}
						// If the file is a font file, save it to the fonts folder
						if (fontPattern.test(info.name)) {
							return 'fonts/[name].[hash][extname]';
						}
						// If the file is an image file, save it to the images folder
						if (imagePattern.test(info.name)) {
							return 'images/[name].[hash][extname]';
						}

						// If the file is not a JavaScript file, CSS file, font file, or image file, save it to the assets folder
						return 'assets/[name].[hash][extname]';
					} else {
						// If the file name is not specified, save it to the output directory
						return '[name].[hash][extname]';
					}
				},
				chunkFileNames: 'js/[name]-chunk.[hash].js',
			}
		},
	},
	css: {
		modules: {
			localsConvention: 'camelCaseOnly',
		},
		postcss: {
			plugins: [
				tailwindcss(),
				autoprefixer(),
			],
		},
	},
	plugins: [
		preact(),
	]
};

// Export configuration
export default config;