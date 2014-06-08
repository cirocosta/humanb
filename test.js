'use strict';

var humanb = require('./humanb')
 ,	assert = require('assert')
 ,	exp = [	
 			{a: '100', e: '100 B'},
			{a: '1024', e: '1.0 KiB'},
			{a: 1024, e: '1.0 KiB'},
			{a: 1127, e: '1.1 KiB'},
			{a: 1024*2, e: '2.0 KiB'},
			{a: 1024*1024, e: '1.0 MiB'},
			{a: 1024*1024*1024, e: '1.0 GiB'},
			{a: 1024*1024*1024*1024, e: '1.0 TiB'}
		];

describe('Bhuman, ', function () {
	it('should convert properly', function () {
		for (var i in exp) {
			var errorMsg = exp[i]['a'] + ' did not convert to ' + exp[i]['e'];

			assert.equal(humanb(exp[i]['a']), exp[i]['e'], errorMsg);
		}
	});
});
