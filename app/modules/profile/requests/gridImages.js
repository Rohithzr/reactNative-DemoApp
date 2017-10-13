// import Libraries
import axios from 'axios';

var gridInstance = axios.create({
    baseURL: getBaseUrl() + '/app/test/rn',
    headers: {
        'Content-Type': 'application/json'
    }
});

export default class GridAPI {

    static sliderImages(values) {
        let payload = {
            
        }
        return new Promise(resolve => {
            gridInstance.post('/slider.json', payload)
                .then(function (response) {
                    resolve(response)
                })
                .catch(function (error) {
                    if (error.response) {
                        // The request was made and the server responded with a status code
                        // that falls out of the range of 2xx
                        resolve(error.response)
                    } else if (error.request) {
                        // The request was made but no response was received
                        // `error.request` is an instance of http.ClientRequest
                        let newError = {
                            message: "Something Went Wrong",
                            status: 500
                        }
                        console.log(error.request);
                        resolve(newError)
                    } else {
                        // Something happened in setting up the request that triggered an Error
                        let newError = {
                            message: "Something Went Wrong",
                            status: 501
                        }
                        console.log(error.config);
                        resolve(newError)
                    }
                });
        });
    }
    static gridImages(values) {
        let payload = {
            
        }
        return new Promise(resolve => {
            gridInstance.post('/slider.json', payload)
                .then(function (response) {
                    resolve(response)
                })
                .catch(function (error) {
                    if (error.response) {
                        // The request was made and the server responded with a status code
                        // that falls out of the range of 2xx
                        resolve(error.response)
                    } else if (error.request) {
                        // The request was made but no response was received
                        // `error.request` is an instance of http.ClientRequest
                        let newError = {
                            message: "Something Went Wrong",
                            status: 500
                        }
                        console.log(error.request);
                        resolve(newError)
                    } else {
                        // Something happened in setting up the request that triggered an Error
                        let newError = {
                            message: "Something Went Wrong",
                            status: 501
                        }
                        console.log(error.config);
                        resolve(newError)
                    }
                });
        });
    }
}

// TODO move this function to a common class
function getBaseUrl() {
    let baseUrl = "";
    let env = process.env.NODE_ENV;

    if (env !== 'production') {
        baseUrl = "http://52.66.182.141";
    } else {
        baseUrl = "https://52.66.182.141";
    }
    return baseUrl;
}