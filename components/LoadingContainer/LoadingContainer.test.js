// General imports
import { render } from '@testing-library/react';

// Components import
import LoadingContainer from './LoadingContainer';

/**
 * Test cases for LoadingContainer component.
 */
describe('LoadingContainer', () => {
  test('displays progress icon while loading is on', () => {
    const { getByRole } = render(
      <LoadingContainer isLoading>
        Content
      </LoadingContainer>
    );

    expect(getByRole('progressbar')).toBeInTheDocument();
  });

  test('displays children while loading is off', () => {
    const { getByText } = render(
      <LoadingContainer isLoading={false}>
        Content
      </LoadingContainer>
    );

    expect(getByText('Content')).toBeInTheDocument();
  });
});
