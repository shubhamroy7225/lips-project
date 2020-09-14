import store from '../../redux/store/store';
import { toastMsg } from '../utility';
import successHandler from "utility/successHandler/successHandler";

const tokenInterceptor = (response) => {
    return successHandler(response);
}

export default tokenInterceptor;