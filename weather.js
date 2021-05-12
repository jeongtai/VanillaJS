const COORDS = 'coords';

function saveCoords(coordsObj) {
	localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position) {
	const latitude = position.coords.latitude;
	const longitude = position.coords.longitude;
	const coordsObj = {
		latitude,
		longitude
	};
	saveCoords(coordsObj);
}

function hadnleGeoError(position) {
	console.log('Cant access geo location');
}

function askForCoords() {
	navigator.geolocation.getCurrentPosition(handleGeoSucces, hadnleGeoError);
}
function loadCoords() {
	const loadedCords = localStorage.getItem(COORDS);
	if (loadedCords === null) {
		askForCoords();
	} else {
		// getWeather
	}
}

function init() {
	loadCoords();
}

init()