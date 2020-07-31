import React from 'react';
import PhotoContainer from '../../../containers/PhotoContainer';
import { Logo } from '../../Logo';
import { GenericList } from '../../GenericList';
import { Text } from '../../Text';
import {
    splitArrayIntoThree,
    splitArrayIntoTwo,
    generateRandomString
} from '../../../utils/helpers';
import styles from './photogrid.css';

interface IPhotoGridProps {
    photosArray: any;
    pageNumber: number;
    isTablet: boolean;
    isDesktop: boolean;
    isEnableLoadingByScroll: boolean;
    deletePhotos: () => void;
    loadPhotos: (pageNumber: number) => void;
    totalPhotos?: number;
    keyword?: string;
}

export function PhotoGrid(props: IPhotoGridProps) {
    const {
        photosArray,
        pageNumber,
        isTablet,
        isDesktop,
        isEnableLoadingByScroll,
        deletePhotos,
        loadPhotos,
        totalPhotos = Infinity,
        keyword
    } = props;

    const loadByScroll = () => {
        const windowBottom = window.innerHeight + window.pageYOffset;

        if (windowBottom == document.body.scrollHeight) {
            window.removeEventListener('scroll', loadByScroll);
            loadPhotos(pageNumber);
        }
    };

    const getList = (array: any) => {
        return array.map((item: any) => ({
            content: <PhotoContainer inform={item} />,
            id: generateRandomString(),
            className: styles.listItemStyle
        }));
    };

    React.useEffect(() => {
        loadPhotos(pageNumber);
    }, [keyword]);

    React.useEffect(() => {
        if (isEnableLoadingByScroll && (photosArray.length < totalPhotos)) {
            window.addEventListener('scroll', loadByScroll);
        }

        return () => {
            window.removeEventListener('scroll', loadByScroll);
        };
    });

    const splittingResult = (isDesktop) ? splitArrayIntoThree(photosArray) :
        (isTablet) ? splitArrayIntoTwo(photosArray) :
        [photosArray];

    return (
        <div className={styles.photoGridBlock}>
            <div className={styles.photoGrid}>
                <ul>
                    <GenericList list={getList(splittingResult[0])} />
                </ul>
                {isTablet && (
                    <ul>
                        <GenericList list={getList(splittingResult[1])} />
                    </ul>
                )}
                {isDesktop && (
                    <ul>
                        <GenericList list={getList(splittingResult[2])} />
                    </ul>
                )}
            </div>
            {photosArray.length == 0 && pageNumber > 1 && (
                <Text
                    As="div"
                    size={16}
                    mobileSize={14}
                    className={styles.nothingFoundBlock}
                >
                    Oops... Nothing found!
                </Text>
            )}
            {(photosArray.length == totalPhotos) && (
                <div className={styles.logoBlock}>
                    <Logo deletePhotos={deletePhotos} />
                </div>
            )}
        </div>
    );
}
