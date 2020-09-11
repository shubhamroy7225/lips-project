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
}
