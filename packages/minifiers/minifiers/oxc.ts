import { minify } from 'oxc-minify';
import { createMinifier } from '../utils/create-minifier.js';

export default createMinifier(
	'oxc-minify',
	{
		default: ({ code }) => {
			return Promise.resolve(minify("test.js", code).code);
		},
	},
);
