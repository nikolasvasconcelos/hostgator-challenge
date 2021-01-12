import { setContext } from 'apollo-link-context';
import { store } from '../redux/store';

const authLink = setContext(() => ({
  headers: {
    authorization: store.getState().Auth.token || ``,
  },
}));

export default authLink;
