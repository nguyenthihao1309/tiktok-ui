
import { useEffect, useRef, useState } from 'react';

import {
    faCircleXmark,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';

import HeadlessTippy from '@tippyjs/react/headless'
import classNames from 'classnames/bind';

import styles from './Search.module.scss'
import { Wrapper as PopperWrapper } from '~/components/Popper'
import AccountItem from '~/components/AccountItem';
import { SearchIcon } from '~/components/Icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles)

function Search() {

    const [searchResult, setSearchResult] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const [searchShowResult, setSearchShowResult] = useState(true)
    const [loading, setLoading] = useState(false)

    const inputRef = useRef()

    useEffect(() => {
        if (!searchValue.trim()) {
            setSearchResult([])
            return
        }
        setLoading(true)
        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
            .then((res) => res.json())
            .then((res) => {
                setSearchResult(res.data)
                setLoading(false)
            })
    }, [searchValue]);

    const handleHiddenSearchResult = () => {
        setSearchShowResult(false)
    }

    return (
        <div>
            <HeadlessTippy
                interactive
                visible={searchShowResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            {searchResult.map((result) => (
                                <AccountItem key={result.id} data={result} />
                            ))}

                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHiddenSearchResult}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        placeholder='Search accounts and videos'
                        spellCheck={false}
                        onChange={(e) => setSearchValue(e.target.value)}
                        onFocus={() => setSearchShowResult(true)}
                    />

                    {!!searchValue && !loading && (
                        <button
                            className={cx('clear')}
                            onClick={() => {
                                setSearchValue('')
                                setSearchResult([])
                                inputRef.current.focus()
                            }}
                        >
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>)}
                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                    <button className={cx('search-button')}>
                        <SearchIcon />
                    </button>
                </div>
            </HeadlessTippy>
        </div>

    );
}

export default Search;