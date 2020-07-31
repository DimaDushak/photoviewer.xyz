import React from 'react';
import classNames from 'classnames';
import LikesBlockContainer from '../../../../containers/LikesBlockContainer';
import { ButtonComponent } from '../../../ButtonComponent';
import { UserLinksBlock } from '../../../UserLinksBlock';
import { PhotoImage } from '../../../PhotoImage';
import { Text } from '../../../Text';
import { Break } from '../../../Break';
import { getDate } from '../../../../utils/helpers';
import styles from './fullphoto.css';

const portraitFigure = classNames(styles.figure, styles.figure_flex);
const portraitFigcaption = classNames(styles.figcaption, styles.figcaption_column);
const portraitDateBlock = classNames(styles.dateBlock, styles.dateBlockOrder);
const landscapePhoto = classNames(styles.photo, styles.photo_landscape);
const portraitPhoto = classNames(styles.photo, styles.photo_portrait);
const leftButton = classNames(styles.button, styles.leftButton);
const rightButton = classNames(styles.button, styles.rightButton)

const minTouchLength = 30;

interface IFullPhotoProps {
    inform: any;
    currentIndex: number;
    isDesktop: boolean;
    totalPhotos: number;
    goToNext: () => void;
    goToPrevious: () => void;
}

export function FullPhoto(props: IFullPhotoProps) {
    const {
        inform,
        currentIndex,
        isDesktop,
        totalPhotos,
        goToNext,
        goToPrevious,
    } = props;
    const { width, height, id, user, created_at, urls, alt_description } = inform;
    const isLandscapeOrientation = width > height;

    const handleTouch = (xAbs: number) => {
        if (xAbs > minTouchLength) goToNext();
        if (xAbs < -minTouchLength && currentIndex != 0) goToPrevious();
    };

    return (
        <figure
            key={id}
            className={isLandscapeOrientation ? styles.figure : portraitFigure}
        >
            <figcaption className={isLandscapeOrientation ? styles.figcaption : portraitFigcaption}>
                <UserLinksBlock user={user} />
                <div className={isLandscapeOrientation ? styles.dateBlock : portraitDateBlock}>
                    <Text size={14} mobileSize="_none">
                        Date of publication:
                    </Text>
                    <Break size={5} mobileSize="_none" top />
                    <Text size={14} mobileSize={12}>
                        {getDate(created_at)}
                    </Text>
                </div>
                <LikesBlockContainer inform={inform} />
            </figcaption>
            <Break size={10} mobileSize="_none" top={isLandscapeOrientation ?? false} />
            <Break size={10} desktopSize="_none" top />
            <div
                className={styles.imageBlock}
                onClick={(e) => e.stopPropagation()}
            >
                <PhotoImage
                    className={isLandscapeOrientation ? landscapePhoto : portraitPhoto}
                    src={urls.regular}
                    alt={alt_description}
                    title={alt_description}
                    onTouch={handleTouch}
                />
                {!isDesktop && (
                    <>
                        <ButtonComponent
                            className={leftButton}
                            type="arrow6"
                            color="white"
                            title={(currentIndex == 0) ? '' : 'Previous'}
                            noActive={currentIndex == 0}
                            onClick={goToPrevious}
                        />
                        <ButtonComponent
                            className={rightButton}
                            type="arrow6"
                            color="white"
                            title={(currentIndex == totalPhotos - 1) ? '' : 'Next'}
                            noActive={currentIndex == totalPhotos - 1}
                            onClick={goToNext}
                        />
                    </>
                )}
            </div>
        </figure>
    );
}
