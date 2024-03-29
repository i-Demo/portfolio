import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Button from '~/components/Button';
import { faLightbulb, faMoon } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from './ToggleTheme.module.scss';

const cx = classNames.bind(styles);

function ToggleTheme() {
    let localTheme = '';
    localStorage.getItem('PortfolioTheme')
        ? (localTheme = localStorage.getItem('PortfolioTheme'))
        : (localTheme = 'dark');
    const [theme, setTheme] = useState(localTheme);

    const handleToggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    useEffect(() => {
        localStorage.setItem('PortfolioTheme', theme);
        document.body.dataset.theme = theme;
    }, [theme]);

    return (
        <div className={cx('toggle-theme')}>
            {theme === 'light' && (
                <Button className={cx('toggle-theme-btn')} onClick={handleToggleTheme}>
                    <FontAwesomeIcon icon={faMoon} />
                </Button>
            )}
            {theme === 'dark' && (
                <Button className={cx('toggle-theme-btn')} onClick={handleToggleTheme}>
                    <FontAwesomeIcon icon={faLightbulb} />
                </Button>
            )}
        </div>
    );
}

export default ToggleTheme;
