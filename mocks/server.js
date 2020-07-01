import { setupServer } from 'msw/node';
import handlers from './handlers';

// Setup requests interception using the given handlers.
export default setupServer(...handlers);
