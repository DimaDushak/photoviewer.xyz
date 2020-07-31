import React from 'react';
import classNames from 'classnames';
import { toJson } from 'unsplash-js';
import { unsplash } from '../../unsplash';
import { Text, EColors } from '../Text';
import { Break } from '../Break';
import { HeartSVG } from '../SVG/HeartSVG';
import { NOOP } from '../../utils/helpers';
import styles from './likesblock.css';

interface IPhotoLikesBlockProps {
    inform: any;
    isPhotoGrid?: boolean;
    toLikePhoto: (json: object, addedLike: number) => void;
    showInform?: (id: string) => void;
}

const addedLike = 1;

export function LikesBlock(props: IPhotoLikesBlockProps) {
    const { inform, isPhotoGrid, toLikePhoto, showInform = NOOP } = props;
    const { liked_by_user, id, likes } = inform;

    const classes = classNames(
        styles.likesButton,
        { [styles.likedButton]: liked_by_user }
    );

    const unlikePhoto = () => {
        unsplash.photos.unlikePhoto(id)
            .then(toJson)
            .then(json => {
                toLikePhoto(json.photo, -addedLike);
            });
    };

    const likePhoto = () => {
        unsplash.photos.likePhoto(id)
            .then(toJson)
            .then(json => {
                toLikePhoto(json.photo, addedLike);
            });
    };

    const handleClick = (e: React.SyntheticEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        showInform(id);
        liked_by_user ? unlikePhoto() : likePhoto();
    };

    return (
        <div className={styles.likesBlock}>
            <button
                className={classes}
                onClick={handleClick}
                title={liked_by_user ? 'Unlike' : 'Like'}
            >
                <HeartSVG />
            </button>
            <Break size={8} />
            <Text
                size={16}
                mobileSize={14}
                color={isPhotoGrid ? EColors.lightGrey_black : EColors.lightBlack}
            >
                {likes}
            </Text>
        </div>
    );
}
