import className from 'classnames/bind';
import styles from './Sidebar.module.scss'

const cx = className.bind(styles)

function Sidebar() {
    return <aside className={cx('wrapper')}>
        <h2>Sidebar</h2>
    </aside>;
}

export default Sidebar;