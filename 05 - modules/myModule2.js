console.log('Module 2 was loaded...');

var globalTimes = 0;
module.exports = function(dependency) {
	var times = 0;

	//private methods
	function doCount() {
		console.log(
			'Inside my module 2, times:', times++,
			'-> global times:', globalTimes++,
			'-> dependency:', dependency
		);
	};

	//public
	return {
		count: doCount
	};
};