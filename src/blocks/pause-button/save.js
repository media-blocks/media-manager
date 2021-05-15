/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

export default function save() {
	return (
		<div { ...useBlockProps.save() }>
			{ __( 'Pause', 'media-manager' ) }
		</div>
	);
}
