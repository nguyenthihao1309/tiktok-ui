import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from './AccountItem.module.scss'


const cx = classNames.bind(styles)

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/240941003_1028658221226732_161437722092759507_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=e3f864&_nc_ohc=THA_1Ii1sfcAX_WUdbx&_nc_ht=scontent.fdad3-5.fna&oh=00_AT9yZa_XcXEonHG-pCv6_L8eWZzmg1rh6XBunuRY5c7_Og&oe=62BCAC91"
                alt="Hao" />
            <div className={cx('info')}>
                <h4 className={cx('username')}>
                    <span>NguyenHao</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
                </h4>
                <span className={cx('name')}>Nguyễn Thị Hảo</span>

            </div>
        </div>
    );
}

export default AccountItem;