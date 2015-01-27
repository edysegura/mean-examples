console.log('Module 1 was loaded...');

module.exports = {
	times: 0,
	writeSomething: function() {
		console.log('Something, times:', this.times++);
	}
};