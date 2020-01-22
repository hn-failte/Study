module.exports = () => {
	let argvs = process.argv
	argvs = argvs.slice(2)
	argvs = argvs.map(argv => {
		let obj = {[argv]: true}
		let params = argv
		if(/.+=.+/.test(argv)) {
			params = argv.split('=');
			let key = params[0];
			let value = params.slice(1).join('=');
			if(/^{.*}$/.test(value.trim())) {
				value = eval(JSON.parse(JSON.stringify(value)).replace(/:\s?/, '": "').replace(/,/, '",').replace(/{/, '{"').replace(/}/, '"}'));
			}
			try {
				obj = {[key]: value};
			} catch(err) {
				obj = {[key]: value};
			}
		}
		return obj;
	})
	return argvs.reduce((start, item, index, argvs) => {
		let key = Object.keys(item)[0];
		let value = Object.values(item)[0];
		start[key] = value;
		return start;
	}, {}, 0);
}
