'use strict';

describe('How To Test Navigation And Routing', function () {

	beforeEach(function () {
		browser.get('http://0.0.0.0:8081/');
	});

	it('should default to home page', function () {
		expect(browser.getLocationAbsUrl()).toContain('/home');
	});

	it('should redirect to home page if an unknown url is provided', function () {
		browser.get('http://0.0.0.0:8081/#/dummy');
		expect(browser.getLocationAbsUrl()).toContain('/home');
	});

	it('should find all campaigns page links and click on one', function () {
		// var campaignsLink = $('a[href*="campaigns"]');
		var campaignsLink = element.all(by.tagName('a')).then(function(items) { 
			expect(items.length).toBe(2);
			items[1].click();
			expect(browser.getLocationAbsUrl()).toContain('/campaigns/1');
		});
	});
});
