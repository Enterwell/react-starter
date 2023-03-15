/* eslint-disable react/require-default-props */
// General imports
import clsx from 'clsx';

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
