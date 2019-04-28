import React from 'react'

const styles = {
	root: {
		paddingTop: '100px',
		textAlign: 'center'
	}
}

export default function NotFound() {
	return (
		<div style={styles.root}>
			<h3>Sorry, page not found!</h3>
		</div>
	)
}
