import { useState } from 'react';
import TabMenuItem from './TabMenuItem';
import Image from '~/components/Image';
import { images } from '~/assets/images';
import PageHeader from '~/components/PageHeader';

import classNames from 'classnames/bind';
import styles from './Portfolio.module.scss';

const cx = classNames.bind(styles);

const PROJECT_ITEMS = [
    {
        id: 1,
        tech: ['scss/react', 'restfulApi'],
        name: 'Movie App',
        img: images.movie,
        url: 'https://movie-298.netlify.app/',
    },
    {
        id: 2,
        tech: ['scss/react'],
        name: 'MUSIC WEB',
        img: images.musicApp,
        url: 'https://idemomusic.netlify.app/',
    },

    {
        id: 3,
        tech: ['scss/react'],
        name: 'My Portfolio',
        img: images.portfolio,
        url: 'https://portfoliohoaivi.netlify.app/',
    },
    {
        id: 4,
        tech: ['scss/react'],
        name: 'Mac Store',
        img: images.macStore,
    },
    {
        id: 5,
        tech: ['css/js'],
        name: 'Music Player',
        img: images.musicPlayer,
        url: 'https://i-demo.github.io/Music-Player/',
    },

    {
        id: 6,
        tech: ['css/js', 'restfulApi'],
        name: 'E-Commerce',
        img: images.eCommerce,
        url: 'https://pvshop.netlify.app/',
    },
];

function Portfolio() {
    const [currentTab, setCurrentTab] = useState('all');

    const renderAllTab = () => {
        return PROJECT_ITEMS.map((item) => {
            return (
                <a href={item.url} target="_blank" rel="noreferrer" key={item.id} className={cx('tab-item')}>
                    <Image alt="TabItem" src={item.img} className={cx('background')} />
                    <h3>{item.name}</h3>
                </a>
            );
        });
    };

    const renderTab = () => {
        // eslint-disable-next-line array-callback-return
        return PROJECT_ITEMS.map((item) => {
            if (item.tech.includes(currentTab)) {
                return (
                    <a
                        href={item.url}
                        target="_blank"
                        rel="noreferrer"
                        key={`${currentTab} ${item.id}`}
                        className={cx('tab-item')}
                    >
                        <Image alt="TabItem" src={item.img} className={cx('background')} />
                        <h3>{item.name}</h3>
                    </a>
                );
            }
        });
    };

    return (
        <div>
            <div className="slide"></div>

            <div className={cx('content')} data-aos="fade-up">
                <PageHeader titleSpan="My" title="portfolio" titleBg="Works" />

                <div className={cx('container')}>
                    <nav className={cx('tabs')}>
                        <TabMenuItem
                            className={currentTab === 'all' ? 'active' : ''}
                            onClick={() => {
                                setCurrentTab('all');
                            }}
                            title="All"
                        />

                        <TabMenuItem
                            className={currentTab === 'css/js' ? 'active' : ''}
                            onClick={() => {
                                setCurrentTab('css/js');
                            }}
                            title="CSS/Javascript"
                        />

                        <TabMenuItem
                            className={currentTab === 'scss/react' ? 'active' : ''}
                            onClick={(e) => {
                                setCurrentTab('scss/react');
                                console.log(e);
                            }}
                            title="Scss/React"
                        />

                        <TabMenuItem
                            className={currentTab === 'restfulApi' ? 'active' : ''}
                            onClick={() => {
                                setCurrentTab('restfulApi');
                            }}
                            title="Restful api"
                        />
                    </nav>

                    <div className={cx('tab-items')}>{currentTab === 'all' ? renderAllTab() : renderTab()}</div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
