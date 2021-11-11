const {EleventyServerlessBundlerPlugin} = require('@11ty/eleventy');
const contrast = require('get-contrast');

module.exports = function(eleventyConfig) {
	eleventyConfig.addPlugin(EleventyServerlessBundlerPlugin, {
		name: 'onrequest',
		functionsDir: './netlify/functions/',
		inputDir: 'src'
	});

	eleventyConfig.addPassthroughCopy('src/css');

	return {
		dir: {
			input: 'src'
		}
	};
}