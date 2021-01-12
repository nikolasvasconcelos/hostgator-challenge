import { onError } from 'apollo-link-error';
import { showLog } from '../util';

const errorLink = onError(({ networkError, graphQLErrors }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) =>
      showLog(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`),
    );
  }
  if (networkError) {
    showLog(`[Network error]: ${networkError}`);
  }
});

export default errorLink;
