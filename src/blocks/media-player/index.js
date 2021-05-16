/**
 * WordPress dependencies
 */
 import { registerBlockType } from '@wordpress/blocks';
 import { __ } from '@wordpress/i18n';

 /**
  * Internal dependencies
  */
 import { PlayerIcon as icon } from '../../icons';
 
 /**
  * Internal dependencies
  */
 import './style.scss';
 import Edit from './edit';
 import save from './save';
 
 export const blockName = 'media-manager/media-player';
 
 registerBlockType( blockName, {
	apiVersion: 2,
	title: __( 'Media Player', 'media-manager' ),
	description: __( 'Compose your custom media player with blocks', 'media-manager' ),
	edit: Edit,
	save,
	icon,
	supports: {
		align: true,
		color: {
			text: false,
			background: true,
		},
	},
	attributes: {
		backgroundColor: {
			type: 'string',
		},
	},
 } );
 