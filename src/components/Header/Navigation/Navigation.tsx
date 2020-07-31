import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GenericList } from '../../GenericList';
import { generateRandomString } from '../../../utils/helpers';
import styles from './navigation.css';

interface INavigationProps {
    deletePhotos: () => void;
}

const paths = [
    ['/main', 'Home'],
    ['/likes', 'Likes']
];

export function Navigation({ deletePhotos }: INavigationProps) {
    const { pathname } = useLocation();

    const navList = paths.map((item) => ({
        id: generateRandomString(),
        content: <Link
                     to={item[0]}
                     className={styles.navLink}
                     onClick={deletePhotos}
                 >
                     {item[1]}
                 </Link>,
        className: (pathname == item[0]) ? 'noActive' : ''
    }));

    return (
        <nav className={styles.navigation}>
            <ul className={styles.navList}>
                <GenericList list={navList} />
            </ul>
        </nav>
    );
}
