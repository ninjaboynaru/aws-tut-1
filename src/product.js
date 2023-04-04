exports.handler = async function(event) {
	console.log('REQUEST: ', JSON.stringify(event, undefined, 2))
	return {
		status: 200,
		headers: { 'Content-Type': 'text/plain' },
		body: `ENDPOINT HIT: ${event.path}\n`
	}
}