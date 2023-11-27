// General imports
import clsx from 'clsx';
import { Pagination as MuiPagination, type PaginationProps } from '@mui/material';

import styles from './Pagination.module.scss';

/**
 * Function representing the Pagination component.
 *
 * @returns Pagination component
 */
export default function Pagination(props: PaginationProps) {
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