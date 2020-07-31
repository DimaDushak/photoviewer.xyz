import React from 'react';
import LikesBlockContainer from '../../../../../containers/LikesBlockContainer';
import { UserLinksBlock } from '../../../../UserLinksBlock';
import { Text, EColors } from '../../../../Text';
import { getDate } from '../../../../../utils/helpers';
import styles from './photoinform.css';

interface IPhotoInformProps {
    inform: any;
    showInform?: (id: string) => void;
}

export function PhotoInform({ inform, showInform }: IPhotoInformProps ) {
    const { user, created_at } = inform;
    
    return (
        <figcaption className={styles.informBlock}>
            <div className={styles.topInformBlock}>
                <Text
                    size={14}
                    mobileSize={12}
                    color={EColors.lightGrey_black}
                >
                    {getDate(created_at)}
                </Text>
                <LikesBlockContainer
                    inform={inform}
                    isPhotoGrid
                    showInform={showInform}
                />
            </div>
            <div className={styles.linksBlock}>
                <UserLinksBlock user={user} isPhotoGrid />
            </div>
        </figcaption>
    );
}
