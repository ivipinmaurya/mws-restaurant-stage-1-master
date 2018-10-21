if ('serviceWorker' in navigator) {
  	navigator.serviceWorker.register('./sw.js')
  	.then(function() {
  		console.log('Registred!');
  	})
  	.catch(function() {
  		console.log('Not Registration!');
  	});
  }
