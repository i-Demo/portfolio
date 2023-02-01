import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faPlus } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from './About.module.scss';

const cx = classNames.bind(styles);

const INFORMATION = [
    {
        title: 'First Name:',
        info: 'Ho',
    },
    {
        title: 'Last Name:',
        info: 'Le Hoai Vi',
    },
    {
        title: 'Birthday:',
        info: '22 Years',
    },
    {
        title: 'Gender:',
        info: 'Mail',
    },
    {
        title: 'National:',
        info: 'Vietnam',
    },
    {
        title: 'Address:',
        info: 'Tp.Ho Chi Minh, Viet Nam',
    },
    {
        title: 'Phone:',
        info: '0363629xxx',
    },
    {
        title: 'Facebook:',
        info: 'facebook.com/vi.hoai.52035',
    },
    {
        title: 'Language:',
        info: 'Vietnamese',
    },
    {
        title: 'Email:',
        info: 'hoaivi.it@gmail.com',
    },
];

function About() {
    return (
        <div className={cx('main')}>
            <div className={cx('page-header')}>
                <h1>
                    <span>About </span>
                    Me
                </h1>
                <span>Resume</span>
            </div>

            <div className={cx('container')}>
                <div className={cx('info')}>
                    <div className={cx('info-basic')}>
                        <h3>PERSONAL INFOS</h3>

                        <ul className={cx('info-list')}>
                            {INFORMATION.map((data, index) => {
                                return (
                                    <li key={index}>
                                        <span>{data.title} </span>
                                        {data.info}
                                    </li>
                                );
                            })}

                            <Button to="/portfolio" slide leftIcon={<FontAwesomeIcon icon={faDownload} />}>
                                <h2>Download Cv</h2>
                            </Button>
                        </ul>
                    </div>

                    <div className={cx('info-more')}>
                        <div className={cx('info-more-card')}>
                            <h3>
                                1 <FontAwesomeIcon className={cx('icon')} icon={faPlus} />
                            </h3>
                            <p>
                                YEARS OF <span>EXPERIENCE</span>
                            </p>
                        </div>
                        <div className={cx('info-more-card')}>
                            <h3>
                                6 <FontAwesomeIcon className={cx('icon')} icon={faPlus} />
                            </h3>
                            <p>
                                COMPLETED <span>PROJECTs</span>
                            </p>
                        </div>
                        <div className={cx('info-more-card')}>
                            <h3>
                                1 <FontAwesomeIcon className={cx('icon')} icon={faPlus} />
                            </h3>
                            <p>
                                HAPPY <span>CUSTOMER</span>
                            </p>
                        </div>
                        <div className={cx('info-more-card')}>
                            <h3>
                                1 <FontAwesomeIcon className={cx('icon')} icon={faPlus} />
                            </h3>
                            <p>
                                AWARD <span>WON</span>
                            </p>
                        </div>
                    </div>
                </div>

                <hr className={cx('separator')} />
            </div>
        </div>
    );
}

export default About;
