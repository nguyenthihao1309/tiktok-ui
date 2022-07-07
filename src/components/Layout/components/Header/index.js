
import classNames from 'classnames/bind';
import 'tippy.js/dist/tippy.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faPlus,
    faSignOut,
    faUser
} from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import styles from './Header.module.scss'
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import Image from '~/components/Image';
import { InboxIcon, MessageIcon, } from '~/components/Icons'
import Search from '../Search';

const cx = classNames.bind(styles)

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt'
                }
            ]
        }
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and Help',
        to: '/feedback'
    }, {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    }
]

const currentUser = true;

function Header() {

    //handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                //Handle Change Language
                break;
            default:
        }
    }

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View Profile',
            to: '/@hao'
        }, {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coins'
        }, {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings'
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        }
    ]


    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* Logo */}
                <img src={images.logo} alt='tiktok' />

                {/* Search */}
                <Search />

                {/* Actions */}
                <div className={cx('actions')}>
                    <Button rounded className={cx('upload-button')} leftIcon={<FontAwesomeIcon icon={faPlus} />}>Upload</Button>

                    {currentUser ? (
                        <div className={cx('action-buttons')}>
                            <button className={cx('action-button')} >
                                <MessageIcon />
                            </button>
                            <button className={cx('action-button')} >
                                <InboxIcon />
                            </button>
                        </div>
                    ) : (
                        <>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image className={cx('user-avatar')}
                                alt='NguyenThiHao'
                                src='https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/240941003_1028658221226732_161437722092759507_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=e3f864&_nc_ohc=THA_1Ii1sfcAX_WUdbx&_nc_ht=scontent.fdad3-5.fna&oh=00_AT9yZa_XcXEonHG-pCv6_L8eWZzmg1rh6XBunuRY5c7_Og&oe=62BCAC91'
                                fallback='https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/240941003_1028658221226732_161437722092759507_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=e3f864&_nc_ohc=THA_1Ii1sfcAX_WUdbx&_nc_ht=scontent.fdad3-5.fna&oh=00_AT9yZa_XcXEonHG-pCv6_L8eWZzmg1rh6XBunuRY5c7_Og&oe=62BCAC91'
                            />
                        ) : (
                            <button className={cx('more-button')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div >
            </div>
        </header >
    );
}

export default Header;