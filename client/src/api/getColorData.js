import { axiosWithAuth } from './axiosWithAuth'

export const getColorData = () => {
    return axiosWithAuth()
        .get('http://localhost:5000/api/colors')
        .then(res => {
            return res;
        })
        .catch(err => {
            return err;
        })
}