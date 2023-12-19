// Components import
import { CircularProgress } from '@mui/material';

// Styles import
import styles from './LoadingContainer.module.scss';

type LoadingContainerProps = {
  isLoading?: boolean;
  children?: React.ReactNode;
}

/**
 * Function representing the loading container component.
 *
 * @returns LoadingContainer component
 */
export default function LoadingContainer(props: LoadingContainerProps) {
  const {
    isLoading = false,
    children
  } = props;

  return (
    <div className={styles.container}>
      {isLoading ? <CircularProgress /> : children}
    </div>
  );
}