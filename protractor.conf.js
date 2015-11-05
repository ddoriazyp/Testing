exports.config = {
	seleniumAddress: 'http://localhost:4444/wd/hub',
	specs: ['test/appSpec.e2e.js'],
	jasmineNodeOpts: {
		showColors: true,
		defaultTimeoutInterval: 30000
	}
};
