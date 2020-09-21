import store from '../../redux/store/store';
import * as actions from '../../redux/actions/user/action';

export const onLogout = () => {
    store.dispatch(actions.logout);
}   