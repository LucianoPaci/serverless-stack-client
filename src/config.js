const dev = {
	s3: {
		REGION: 'us-east-1',
		BUCKET: 'notes-app-uploads-paci'
	},

	cognito: {
		REGION: 'us-east-1',
		USER_POOL_ID: 'us-east-1_TGW5YV7J0',
		IDENTITY_POOL_ID: 'us-east-1:3b3cd18e-177b-4986-b966-8510c87f83d0',
		APP_CLIENT_ID: '6v6o1ufa73lurs905lvk6t2bd9'
	},

	apiGateway: {
		REGION: 'us-east-1',
		URL: 'https://f708we43uh.execute-api.us-east-1.amazonaws.com/prod'
	}
}

const prod = {
	s3: {
		REGION: 'us-east-1',
		BUCKET: 'notes-app-uploads-paci'
	},

	cognito: {
		REGION: 'us-east-1',
		USER_POOL_ID: 'us-east-1_TGW5YV7J0',
		IDENTITY_POOL_ID: 'us-east-1:3b3cd18e-177b-4986-b966-8510c87f83d0',
		APP_CLIENT_ID: '6v6o1ufa73lurs905lvk6t2bd9'
	},

	apiGateway: {
		REGION: 'us-east-1',
		URL: 'https://f708we43uh.execute-api.us-east-1.amazonaws.com/prod'
	}
}

const config = process.env.REACT_APP_STAGE === 'production' ? prod : dev


export default {
	MAX_ATTACHMENT_SIZE: 5000000,
	...config
}
