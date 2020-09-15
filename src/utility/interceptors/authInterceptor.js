import store from '../../redux/store/store';
import * as commonService from "utility/utility";

const authInterceptor = (config) => {
    commonService.isLoading.onNext(true); // start loading
    const state = store.getState();
    if (state.authReducer.token) {
        config.headers.common['Authorization'] = `Bearer ${state.authReducer.token}`;
    }
    return config;
}

export default authInterceptor;