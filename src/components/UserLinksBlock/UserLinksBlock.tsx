import React from 'react';
import { Break } from '../Break';
import { Text, EColors } from '../Text';
import styles from './userlinksblock.css';

interface IUserLinksBlock {
    user: any;
    isPhotoGrid?: boolean;
}

export function UserLinksBlock({ user, isPhotoGrid }: IUserLinksBlock) {
    const { links, profile_image, name } = user;

    return (
        <div className={styles.linksBlock} title="">
            <div className={styles.userImageLinkBlock}>
                <a
                    className={styles.userImageLink}
                    href={links.html}
                    target="_blank"
                    onClick={(e) => e.stopPropagation()}
                >
                    <img 
                        src={profile_image.small}
                        className={isPhotoGrid ? styles.greyShadow : styles.blackShadow}
                    />
                </a>
            </div>
            <Break size={8} />
            <div onClick={(e) => e.stopPropagation()}>
                <Text
                    As="a"
                    size={16}
                    mobileSize={14}
                    target="_blank"
                    color={isPhotoGrid ? EColors.lightGrey_black_hover : EColors.blackHover}
                    href={links.html}
                >
                    {name}
                </Text>
            </div>
        </div>
    );
}
