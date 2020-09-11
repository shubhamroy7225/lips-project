import axios from 'axios';
import { toastMsg } from 'utility/utility';
import { lowerCase } from 'lodash';
import store from '../../redux/store/store';

export default function errorHandler(error) {
    if (axios.isCancel(error)) {
        return Promise.reject(error);
    }
 
    if (error.data){
        toastMsg(error.data.message, true);
    }else if (error.message) {
        toastMsg(error.message, true);
    }

    return Promise.reject(error.message);

export default function errorHandler (error) {
    //hide loader
    commonService.isLoading.onNext(false);
    if (Axios.isCancel(error)) {
        return Promise.reject(error);
    }
    if (error.message === "Network Error") {
        commonService.forError('Error connecting server. Please check your internet connection.', 'Error');
        return Promise.reject(error.message);
    }
    const message  = error.response ? error.response.data.message : 'Seems like something went wrong!' ;
    switch (error.response.status) {
        case 400:
            toastMsg(message, true);
            break;
        case 401:
            toastMsg(message, true);
            break;
        case 500:
            toastMsg(message, true);
            break;
        case 504:
            toastMsg('Sorry, could not access the external resource to refine the data for your request, please try again later!' , true);
            break;
        case 700:
            toastMsg(message, true);
            break;
        default:
            toastMsg(message ? message : 'something went wrong' , true);
            break;
    }
    return Promise.reject(error.response);
}
