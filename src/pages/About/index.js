import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faPlus } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import Image from '~/components/Image';
import { logo } from '~/assets/images';
import PageHeader from '~/components/PageHeader';

import classNames from 'classnames/bind';
import styles from './About.module.scss';

const cx = classNames.bind(styles);

const INFORMATION = [
    {
        title: 'First Name:',
        info: 'Vi',
    },
    {
        title: 'Last Name:',
        info: 'Ho Le Hoai',
    },
    {
        title: 'Birthday:',
        info: '23 Years',
    },
    {
        title: 'Gender:',
        info: 'Male',
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
        info: '0363629439',
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

const SKILLS = [
    {
        title: 'Html',
        src: logo.html,
    },
    {
        title: 'css',
        src: logo.css,
    },
    {
        title: 'sass',
        src: logo.sass,
    },
    {
        title: 'Javascript',
        src: logo.js,
    },
    {
        title: 'Bootstrap',
        src: logo.bootstrap,
    },
    {
        title: 'responsive web design',
        src: logo.responsive,
    },
    {
        title: 'react',
        src: logo.react,
    },
    {
        title: 'redux',
        src: logo.redux,
    },
    {
        title: 'git',
        src: logo.git,
    },
    {
        title: 'axios',
        src: logo.axios,
    },
];

function About() {
    return (
        <div>
            <div className="slide"></div>
            <div className={cx('content')} data-aos="fade-up">
                <PageHeader titleSpan="About" title="Me" titleBg="Resume" />

                <div className={cx('container')}>
                    <div className={cx('info')}>
                        <div className={cx('info-basic')} data-aos="fade-up-right">
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

                                <Button
                                    href="https://drive.google.com/file/d/11v16ZXRyIwlk1zTtWB91AN1zn4hIuzaq/view?usp=sharing"
                                    target="_blank"
                                    slide
                                    leftIcon={<FontAwesomeIcon icon={faDownload} />}
                                >
                                    <h2>Download Cv</h2>
                                </Button>
                            </ul>
                        </div>

                        <div className={cx('info-more')} data-aos="fade-up-left">
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

                    <div className={cx('skills')}>
                        <h3 className={cx('title')}>My Skills</h3>

                        <div className={cx('skills-container')}>
                            {SKILLS.map((skill, index) => {
                                return (
                                    <div key={index} className={cx('skill')} data-aos="fade-up">
                                        <div className={cx('skill-wrapper')}>
                                            <Image alt={skill.title} src={skill.src} className={cx('image')} />
                                        </div>
                                        <div className={cx('skill-name')}>
                                            <h6>{skill.title}</h6>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <hr className={cx('separator')} />

                    <div className={cx('experience')}>
                        <h3 className={cx('title')}>experience</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
