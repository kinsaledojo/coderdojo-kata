/**
 * WordPress dependencies
 */
 import { __, _x } from '@wordpress/i18n';
 import { code as icon } from '@wordpress/icons';
 
 /**
  * Internal dependencies
  */
 import edit from './edit';
 import metadata from './block.json';
 import save from './save';
 
 const { name } = metadata;
 
 export { metadata, name };
 
 export const settings = {
	 title: _x( 'Code Snippet', 'block title' ),
	 description: __(
		 'Display code snippets that respect your spacing and tabs.'
	 ),
	 icon,
	 example: {
		 attributes: {
			 /* eslint-disable @wordpress/i18n-no-collapsible-whitespace */
			 // translators: Preserve \n markers for line breaks
			 content: __(
				 '// A "block" is the abstract term used\n// to describe units of markup that\n// when composed together, form the\n// content or layout of a page.\nregisterBlockType( name, settings );'
			 ),
			 /* eslint-enable @wordpress/i18n-no-collapsible-whitespace */
		 },
	 },
	 styles: [
		{
			name: 'default',
			label: _x( 'Default', 'block style' ),
			isDefault: true,
		},
		{ name: 'trinket', label: _x( 'Trinket', 'block style' ) },
	],
	 edit,
	 save,
 };