import React from 'react';
import { useHistory } from 'react-router-dom';
import { PhotoInform } from './PhotoInform';
import { PhotoImage } from '../../../PhotoImage';
import { NOOP } from '../../../../utils/helpers';
import styles from './photo.css';

interface IPhotoProps {
    id: string;
    isTablet: boolean;
    disableLoadingByScroll: (scrollPositionY: number) => void;
    showInform: (id: string) => void;
    hideInform: () => void;
    inform: any;
}

const maxPhotoWidth = 767;

export function Photo(props: IPhotoProps) {
    const { id, isTablet, disableLoadingByScroll, showInform, hideInform, inform } = props;
    const [ isShownInform, setIsShownInform ] = React.useState(inform.id == id);
    const history = useHistory();
    const { urls, alt_description } = inform;

    const handleClick = () => {
        hideInform();
        disableLoadingByScroll(window.pageYOffset);
        document.body.style.overflow = 'hidden';
        history.push(`${history.location.pathname}/popup/${inform.id}`);
    };
    
    React.useEffect(() => setIsShownInform(inform.id == id), [id]);

    const handleTouch = (xAbs: number) => {
        if (xAbs == 0) handleClick();
    };

    return (
        <figure
            className={styles.figureStyle}
            onMouseEnter={() => (isTablet) ? setIsShownInform(true) : NOOP()}
            onMouseLeave={() => {
                if (isTablet) {
                    (inform.id == id) ? hideInform() : setIsShownInform(false);
                }
            }}
            title={alt_description}
            onClick={handleClick}
            onTouchStart={(e) => e.preventDefault()}
            onTouchEnd={(e) => e.preventDefault()}
        >
            {isShownInform && isTablet && (
                <PhotoInform inform={inform} showInform={showInform} />
            )}
            {!isTablet && (
                <div onClick={(e) => e.stopPropagation()}>
                    <PhotoInform inform={inform} />
                </div>
            )}
            <PhotoImage
                className={styles.photo}
                src={urls.raw + `&w=${maxPhotoWidth}`}
                alt={alt_description}
                onTouch={handleTouch}
            />
        </figure>
    );
}
