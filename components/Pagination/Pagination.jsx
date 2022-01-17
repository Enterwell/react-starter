/* eslint-disable react/require-default-props */
// General imports
import clsx from 'clsx';
import PropTypes from 'prop-types';

// Component import
import { Pagination as MuiPagination } from '@mui/material';

// Styles import
import styles from './Pagination.module.scss';

/**
 * Function represents the Pagination component.
 *
 * @param {Object} props Various Pagination's props
 * @returns Pagination component
 */
function Pagination(props) {
  const {
    classes = {},
    ...rest
  } = props;

  return (
    <MuiPagination
      classes={{
        root: classes.root,
        ul: clsx(classes.ul, styles.pagesList)
      }}
      {...rest}
    />
  );
}

export default Pagination;

/**
 * Pagination prop types.
 */
Pagination.propTypes = {
  /** The variant to use. */
  variant: PropTypes.oneOf(['outlined', 'text']),

  /** The total number of pages. */
  count: PropTypes.number,

  /** Callback fired when the page is changed. */
  onChange: PropTypes.func,

  /** The shape of the pagination items. */
  shape: PropTypes.oneOf(['circular', 'rounded']),

  /** If <code>true</code>, the component is disabled. */
  disabled: PropTypes.bool,

  /** The active pagination color. */
  color: PropTypes.oneOf(['primary', 'secondary', 'standard']),

  /** The size of the component. */
  size: PropTypes.oneOf(['small', 'medium', 'large']),

  /** Number of always visible pages before and after the current page. */
  siblingCount: PropTypes.number,

  /** The current page. */
  page: PropTypes.number,

  /** If <code>true</code>, show the first-page button. */
  showFirstButton: PropTypes.bool,

  /** If <code>true</code>, show the last-page button. */
  showLastButton: PropTypes.bool
};

/**
 * Pagination default props.
 */
Pagination.defaultProps = {
  variant: 'text',
  count: 1,
  shape: 'circular',
  disabled: false,
  color: 'standard',
  size: 'medium',
  siblingCount: 1,
  page: 1,
  showFirstButton: false,
  showLastButton: false
};
