import { TypeRegisterData } from '@/types/index';

const valid = (data: TypeRegisterData) => {
    if (
        data.username.trim().length >= 1 &&
        data.email.trim().length >= 1 &&
        data.phone.trim().length === 18 &&
        data.password.trim().length >= 1 &&
        data.password.trim() === data.resetPassword.trim()
    ) { 
        return true
    } else {
        return false
    }
}

export default valid