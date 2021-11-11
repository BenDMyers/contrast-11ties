const contrast = require('get-contrast');

module.exports = {
	eleventyComputed: {
		ratio: (data) => {
			if (!data.eleventy.serverless) {
				return 1;
			}

			const {foreground, background} = data.eleventy.serverless.query;
			return contrast.ratio(foreground, background);
		},

		formattedRatio: (data) => {
			return Number(data.ratio).toFixed(2);
		}
	}
};