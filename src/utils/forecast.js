const request = require('postman-request');

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=6584e93c85708deef8ec28e95b54d7c1&query=${latitude},${longitude}&units=f`;

    request({ url, json: true }, (error, { body = { error, current } }) => {
        if (error) {
            callback('Unable to connect to weather service !', undefined);
        } else if (body.error) {
            callback('Unable to find location')
        } else {
            const data = body.current;
            const text = `${data.weather_descriptions[0]}. It is currently ${data.temperature} degrees out. There is a humidity of ${data.humidity}`;
        
            callback(undefined ,text);
        }
    });
};

module.exports = forecast;