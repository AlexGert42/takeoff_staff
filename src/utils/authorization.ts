import Cookies from 'js-cookie'

const authorization = () => {
    if (Cookies.get('jwt')) {
        return {
            headers: {
                Authorization: `Bearer ${Cookies.get('jwt')}`
            }
        }
    } else {
        console.log('error get token');
        return {}
    }
}

export default authorization