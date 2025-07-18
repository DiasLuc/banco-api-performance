// Import the http module to make HTTP requests. From this point, you can use `http` methods to make HTTP requests.
import http from 'k6/http'
// Import the sleep function to introduce delays. From this point, you can use the `sleep` function to introduce delays in your test script.
import { sleep, check } from 'k6'

import { getBaseURL } from '../utils/variables.js'

const postLogin = JSON.parse(open('../fixtures/postLogin.json'))

export const options = {
    // iterations: 1,
    // Define the number of iterations for the test
    stages: [
        {duration: '5s', target: 10},
        {duration: '20s', target: 10},
        {duration: '5s', target: 0},
    ],

    thresholds: {
        http_req_duration: ['p(90)<3000', 'max<5000'],
        http_req_failed: ['rate<0.01']
    }
}
// The default exported function is gonna be picked up by k6 as the entry point for the test script. It will be executed repeatedly in "iterations" for the whole duration of the test.
export default function() {
    // Test
    const url = getBaseURL() + '/login'

    // // Change username for this test
    // postLogin.username = "junior.lima"
    
    // //See what's in postLogin
    // console.log(postLogin)
    const payload = JSON.stringify(postLogin)

    const params = {
        headers: {
        'Content-Type': 'application/json',
        },
    }

    const response = http.post(url, payload, params)
    check(response, {
        'Validate that Status is 200': (r) => r.status === 200,
        'Validate that Token is a string': (r) => typeof(r.json().token) == 'string'
    })
    // console.log(response)
    sleep(1)
}