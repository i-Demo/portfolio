import { useState } from 'react';
import Button from '~/components/Button';
import Image from '~/components/Image';
import { images } from '~/assets/images';

import classNames from 'classnames/bind';
import styles from './Portfolio.module.scss';

const cx = classNames.bind(styles);

console.log(images.portfolio);

const PROJECT_ITEMS = [
    {
        id: 1,
        tech: ['scss/react', 'restfulApi'],
        name: 'Movie App',
        img: images.movie,
    },
    {
        id: 2,
        tech: ['scss/react'],
        name: 'Game Page Landing',
        img: images.gamePage,
    },

    {
        id: 3,
        tech: ['scss/react'],
        name: 'My Portfolio',
        img: images.portfolio,
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
    },

    {
        id: 6,
        tech: ['css/js', 'restfulApi'],
        name: 'E-Commerce',
        img: images.eCommerce,
    },
];

function Portfolio() {
    const [currentTab, setCurrentTab] = useState('all');

    const renderAllTab = () => {
        return PROJECT_ITEMS.map((item) => {
            return (
                <div key={item.id} className={cx('tab-item')}>
                    <Image alt="TabItem" src={item.img} className={cx('background')} />
                    <h3>{item.name}</h3>
                </div>
            );
        });
    };

    const renderTab = () => {
        // eslint-disable-next-line array-callback-return
        return PROJECT_ITEMS.map((item) => {
            if (item.tech.includes(currentTab)) {
                return (
                    <div key={`${currentTab} ${item.id}`} className={cx('tab-item')}>
                        <Image alt="TabItem" src={item.img} className={cx('background')} />
                        <h3>{item.name}</h3>
                    </div>
                );
            }
        });
    };

    return (
        <div className={cx('main')}>
            <div className="slide"></div>

            <div className={cx('content')} data-aos="fade-up">
                <div className={cx('page-header')}>
                    <h1>
                        <span>My </span>
                        portfolio
                    </h1>
                    <span>Works</span>
                </div>

                <div className={cx('container')}>
                    <div className={cx('tabs')}>
                        <Button
                            normal
                            onClick={() => {
                                setCurrentTab('all');
                            }}
                        >
                            <span>All</span>
                        </Button>
                        <Button
                            normal
                            onClick={() => {
                                setCurrentTab('css/js');
                            }}
                        >
                            <span>CSS/Javascript</span>
                        </Button>
                        <Button
                            normal
                            onClick={() => {
                                setCurrentTab('scss/react');
                            }}
                        >
                            <span>Scss/React</span>
                        </Button>
                        <Button
                            normal
                            onClick={() => {
                                setCurrentTab('restfulApi');
                            }}
                        >
                            <span>Restful api</span>
                        </Button>
                    </div>

                    <div className={cx('tab-items')}>{currentTab === 'all' ? renderAllTab() : renderTab()}</div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
