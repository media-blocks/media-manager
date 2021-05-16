/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { PlayerPlayIcon as icon } from '../../icons';
 
 /**
  * Internal dependencies
  */
import './style.scss';
import Edit from './edit';
import save from './save';
 
export const blockName = 'media-manager/play-button';
 
registerBlockType( blockName, {
	apiVersion: 2,
	title: __( 'Play button', 'media-manager' ),
	edit: Edit,
	save,
	icon,
	usesContext: [ 'mediaSourceId' ],
} );
 