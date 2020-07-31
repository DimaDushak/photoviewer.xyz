import React from 'react';
import { Link } from 'react-router-dom';
import styles from './logo.css';

interface ILogoProps {
    deletePhotos: () => void;
}

export function Logo({ deletePhotos }: ILogoProps) {
    return (
        <Link
            to="/"
            className={styles.logo}
            onClick={deletePhotos}
            title="Home"
        >
            PVA
        </Link>
    );
}
