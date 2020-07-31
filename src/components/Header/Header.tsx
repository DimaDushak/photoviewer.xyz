import React from 'react';
import { Logo } from '../Logo';
import { Navigation } from './Navigation';
import { SearchBlock } from './SearchBlock';
import { Break } from '../Break';
import styles from './header.css';

interface IHeaderProps {
    deletePhotos: () => void;
}

export function Header({ deletePhotos }: IHeaderProps) {
    return (
        <header className={styles.header}>
            <Logo deletePhotos={deletePhotos} />
            <Break size={20} mobileSize="_none" />
            <SearchBlock deletePhotos={deletePhotos} />
            <Break size={10} mobileSize="_none" />
            <Navigation deletePhotos={deletePhotos} />
        </header>
    );
}
