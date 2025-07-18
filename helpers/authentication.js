import http from 'k6/http'
import { getBaseURL } from '../utils/variables.js'

const postLogin = JSON.parse(open('../fixtures/postLogin.json'))

export function obtainToken() {
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

    return response.json('token')
}