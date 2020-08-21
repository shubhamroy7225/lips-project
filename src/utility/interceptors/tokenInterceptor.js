import store from '../../redux/store/store';
import * as actions from '../../redux/actions/usersActions/action';
import { toastMsg } from '../utility';

const tokenInterceptor = (response) => {
    // authorize only if it's not impersonation
    if (response.data.user &&
        (response.data.user.access_token || response.data.access_token)) {
        store.dispatch(actions.authorizeUser(response.data.user));
    }

    if (response.data.error) {
        toastMsg(response.data.error.message, true, 5000);
    }

    if (response.data.code) {
        toastMsg(response.data.message, true, 5000);
    }
    return response;
}

export default tokenInterceptor;