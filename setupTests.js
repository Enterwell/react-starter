import '@testing-library/jest-dom/extend-expect';
import 'mobx-react-lite/batchingForReactDom';

import server from './mocks/server';

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());