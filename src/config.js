import Cookies from 'js-cookie'
export default {
    baseURL: 'https://backend.i-need-retail-therapy.nsfwallstreet.com/public/api/',
    fileURL: 'http://103.123.112.149:50/',
    inviteLink: 'http://localhost:8080/invite/'+ Cookies.get('business_id'),
    stripeKey : 'pk_test_17InAewVNcDqj5Igs07zhpy700qujMbU4P'
}
