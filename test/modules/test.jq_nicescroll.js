describe("Test Module jq/nicescroll", function() {

	var mod = "jq/nicescroll";

	var injectModule = __YFjs.injectModule;
	var resetNodes = __YFjs.resetNodes;
	var resetModuleNode = __YFjs.resetModuleNode;

	var _require = __YFjs.requirejs;

	after(function() {
		resetNodes();
	});

	describe("from original", function() {

		var jq, error;

		before(function(done) {
			injectModule(mod, {'data-basecss': false, 'data-debug': true}, function(err) {
				error = err;
				jq = _require('jquery');
				done();
			});
		});
		
		after(function() {
			resetModuleNode(mod);
		});

		it("can be required", function() {
			should.not.exist(error);
			should.exist(jq);
			should.exist(jq.fn.niceScroll);
		});

	});

	describe("from minified", function() {

		var jq, error;

		before(function(done) {
			injectModule(mod, {'data-basecss': false}, function(err) {
				error = err;
				jq = _require('jquery');
				done();
			});
		});
		
		after(function() {
			resetModuleNode(mod);
		});

		it("can be required", function() {
			should.not.exist(error);
			should.exist(jq);
			should.exist(jq.fn.niceScroll);
		});

	});

});