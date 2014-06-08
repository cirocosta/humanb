'use strict';

var humanb = require('./humanb')
 ,	assert = require('assert')
 ,	exp = [
			{a: 1024, e: '1.0 KiB'},
			{a: 1024*2, e: '2.0 KiB'},
			{a: 1024*1024, e: '1.0 MiB'},
			{a: 1024*1024*1024, e: '1.0 GiB'},
			{a: 1024*1024*1024*1024, e: '1.0 TiB'}
		];

describe('Bhuman, ', function () {
	for (var i in exp)
		it('should convert ' + exp[i]['a'] + 'to: ' + exp[i]['e'], function () {
			assert.equal(humanb(exp[i]['a']), exp[i]['e']);
		});
});
