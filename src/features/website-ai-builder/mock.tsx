
// Expanded mock response from AI as a full DOM tree
export const mockLayout = {
	type: 'div',
	props: {
		style: {
			display: 'grid',
			gridTemplateColumns: '200px 1fr',
			gridTemplateRows: '60px 1fr 50px',
			height: '100vh',
			gap: '10px',
		},
	},
	children: [
		{
			type: 'header',
			props: {
				style: {
					gridColumn: '1 / span 2',
					backgroundColor: '#333',
					color: '#fff',
					padding: '10px',
					display: 'flex',
					justifyContent: 'space-between',
				},
			},
			children: [
				'Header Title',
				{
					type: 'button',
					props: {
						style: {
							backgroundColor: '#ff5733',
							color: '#fff',
							border: 'none',
							padding: '5px 10px',
							borderRadius: '5px',
						},
						onClick: "() => alert('Header button clicked!')",
					},
					children: ['Click Me'],
				},
			],
		},
		{
			type: 'aside',
			props: {
				style: {
					backgroundColor: '#f0f0f0',
					padding: '10px',
					overflowY: 'auto',
				},
			},
			children: ['Sidebar Content'],
		},
		{
			type: 'main',
			props: {
				style: {
					padding: '10px',
				},
			},
			children: [
				{
					type: 'h1',
					props: {},
					children: ['Main Section'],
				},
				{
					type: 'p',
					props: {},
					children: ['Some interesting content goes here...'],
				},
				{
					type: 'button',
					props: {
						style: {
							marginTop: '10px',
							padding: '8px 16px',
							backgroundColor: '#4caf50',
							color: '#fff',
							border: 'none',
							borderRadius: '4px',
						},
						onClick: "() => console.log('Main button clicked!')",
					},
					children: ['Log to Console'],
				},
			],
		},
		{
			type: 'footer',
			props: {
				style: {
					gridColumn: '1 / span 2',
					backgroundColor: '#333',
					color: '#fff',
					textAlign: 'center',
					padding: '10px',
				},
			},
			children: ['Footer Content'],
		},
	],
};