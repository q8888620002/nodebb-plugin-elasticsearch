var	Elasticsearch = module.parent.exports,
	async = module.parent.parent.require('async'),

	Middleware = {};

Middleware.ping = function(req, res, next) {
	Elasticsearch.ping(function(err, response) {
		res.locals.ping = !err ? response : undefined;
		next();
	});
};

Middleware.getEnabled = function(req, res, next) {
	res.locals.enabled = parseInt(Elasticsearch.config.enabled, 10) || false;
	next();
};

Middleware.getStats = function(req, res, next) {
	async.parallel({
		count: async.apply(Elasticsearch.getRecordCount),
		topics: async.apply(Elasticsearch.getTopicCount)
	}, function(err, data) {
		if (!err) {
			res.locals.stats = {
				total: data.count,
				topics: data.topics
			};
		}

		next();
	});
};

module.exports = Middleware;