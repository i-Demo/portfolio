import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';
import Image from '~/components/Image';
import { images } from '~/assets/images';

import classNames from 'classnames/bind';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('main')}>
            <div className={cx('background-block')}></div>

            <div className={cx('wrapper')}>
                <div className={cx('left-home')}>
                    <div className={cx('home-avatar')}>
                        <Image alt="avatar" src={images.avatar} />
                    </div>
                </div>

                <div className={cx('right-home')}>
                    <div className={cx('right-wrapper')}>
                        <h1>
                            I'm Hoai Vi
                            <span>Web Developer !</span>
                        </h1>
                        <p>
                            Hello mọi người! Mình là Vĩ, đang là sinh viên năm cuối trường Đại học Giao thông vận tải
                            Tp. HCM. Cơ duyên mình đến với IT là nhờ các sự tích "IT là vua của các nghề", hay câu
                            chuyện "thằng em học BK cơ khí sinh năm 96". Mình đã tìm tòi và học hỏi được nhiều kiến thức
                            về Web Developer (FE: ReactJs, BE: NodeJs), qua đó cũng có cho mình được một vài project thú
                            vị. Với sức trẻ và sự sáng tạo mình đã sẵn sàng thực hiện những đam mê và đương đầu với
                            những khó khăn, thử thách sắp tới trong tương lai. Fighting!
                        </p>

                        <Button to="/portfolio" slide leftIcon={<FontAwesomeIcon icon={faArrowRight} />}>
                            <h2>Portfolio</h2>
                        </Button>
                        <Button to="/about" slide leftIcon={<FontAwesomeIcon icon={faArrowRight} />}>
                            <h2>About</h2>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
