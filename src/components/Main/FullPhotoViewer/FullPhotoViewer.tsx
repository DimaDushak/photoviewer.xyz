import React from 'react';
import classNames from 'classnames';
import { useParams, useHistory} from 'react-router-dom';
import { ButtonComponent } from '../../ButtonComponent';
import { FullPhoto } from './FullPhoto';
import styles from './fullphotoviewer.css';

const backButton = classNames(styles.buttonSizes, styles.backButton);
const leftButtonBlock = classNames(
    styles.buttonSizes,
    styles.buttonBlock,
    styles.leftButtonBlock
);
const rightButtonBlock = classNames(
    styles.buttonSizes,
    styles.buttonBlock,
    styles.rightButtonBlock
);

interface IFullPhotoViewerProps {
    photosArray: any;
    pageNumber: number;
    scrollPositionY: number;
    isDesktop: boolean;
    enableLoadingByScroll: () => void;
    loadPhotos: (pageNumber: number) => void;
    totalPhotos?: number;
}

export function FullPhotoViewer(props: IFullPhotoViewerProps) {
    const {
        photosArray,
        pageNumber,
        scrollPositionY,
        isDesktop,
        enableLoadingByScroll,
        loadPhotos,
        totalPhotos = Infinity,
    } = props;
    const container = React.useRef<HTMLDivElement>(null);

    const { id } = useParams();
    const history = useHistory();
    const pathname = history.location.pathname;
    const path = pathname.slice(0,  pathname.length - 18);  

    const [ currentIndex, setCurrentIndex ] = React.useState<number>(
        photosArray.findIndex((item: any) => item.id == id)
    );

    React.useEffect(() => {
        if (currentIndex == (photosArray.length - 1) && currentIndex < totalPhotos - 1) {
            loadPhotos(pageNumber);
        }
    }, [currentIndex]);

    const goToBack = () => {
        document.body.style.overflow = 'auto';
        enableLoadingByScroll();
        window.scrollTo(0, scrollPositionY);
        history.push(`${path}`);
    };

    const goToPrevious = () => {
        setCurrentIndex((prevCurrentIndex) => prevCurrentIndex - 1);
    };

    const goToNext = () => {
        if (currentIndex < photosArray.length - 1) {
            setCurrentIndex((prevCurrentIndex) => prevCurrentIndex + 1);
        }
    };

    return (
        <div
            className={styles.fullPhoto}
            ref={container}
            onClick={(e: React.SyntheticEvent) => {
                if (e.target == container.current) goToBack();
            }}
        >
            <FullPhoto
                inform={photosArray[currentIndex]}
                currentIndex={currentIndex}
                isDesktop={isDesktop}
                totalPhotos={totalPhotos}
                goToNext={goToNext}
                goToPrevious={goToPrevious}
            />
            <ButtonComponent
                className={backButton}
                type="close"
                color="white"
                title="Close"
                onClick={goToBack}
            />
            {isDesktop && (
                <>
                    <div onClick={(e) => e.stopPropagation()} className={leftButtonBlock}>
                        <ButtonComponent
                            className={styles.arrowButton}
                            type="arrow6"
                            color="white"
                            title={(currentIndex == 0) ? '' : 'Previous'}
                            noActive={currentIndex == 0}
                            onClick={goToPrevious}
                        />
                    </div>
                    <div onClick={(e) => e.stopPropagation()} className={rightButtonBlock}>
                        <ButtonComponent
                            className={styles.arrowButton}
                            type="arrow6"
                            color="white"
                            title={(currentIndex == totalPhotos - 1) ? '' : 'Next'}
                            noActive={currentIndex == totalPhotos - 1}
                            onClick={goToNext} />
                    </div>
                </>
            )}
        </div>
    );
}
