// Components import
import { CircularProgress } from '@material-ui/core';

// Styles import
import styles from './loading-container.module.scss';

/**
 * Function represents the loading container component.
 *
 * @param {Object} props Various component's props
 * @returns component's elements
 */
function LoadingContainer(props) {
  const {
    isLoading,
    children
  } = props;

  return (
    <div className={styles.container}>
      {isLoading ? <CircularProgress /> : children}
    </div>
  );
}

export default LoadingContainer;
