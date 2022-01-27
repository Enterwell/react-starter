// Component imports
import IconButton from '@mui/material/IconButton';

// Icons import
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

// Styles import
import styles from './ThemeSwitcher.module.scss';

/**
 * Function represents the theme switcher component.
 *
 * @param {Object} props Various component's props
 * @returns component's elements
 */
function ThemeSwitcher(props) {
  const {
    isDarkMode,
    onModeChange
  } = props;

  return (
    <IconButton
      className={styles.themeSwitcher}
      onClick={onModeChange}
    >
      {isDarkMode ? <DarkModeIcon /> : <LightModeIcon />}
    </IconButton>
  );
}

export default ThemeSwitcher;
