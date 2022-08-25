import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Image from '../Image';
import styles from '../AccountItem/AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return ( 
        <div className={cx('wrapper')}>
            <Image 
                className={cx('avatar')} 
                src ="https://cdn2.vectorstock.com/i/1000x1000/53/36/nice-astronaut-with-equipment-to-kawaii-avatar-vector-15475336.jpg" 
                alt="Hoaa" 
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}></FontAwesomeIcon>
                </h4>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;