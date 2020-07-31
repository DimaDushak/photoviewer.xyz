import React from 'react';
import { useHistory } from 'react-router-dom';
import { ButtonComponent } from '../../ButtonComponent';
import { Break } from '../../Break';
import { SearchSVG } from '../../SVG/SearchSVG';
import styles from './searchblock.css';

interface ISearchBlockProps {
    deletePhotos: () => void;
}

export function SearchBlock({ deletePhotos }: ISearchBlockProps) {
    const [ { isShownCloseButton, inputValue }, setState ] = React.useState({
        isShownCloseButton: false,
        inputValue: ''
    });
    const history = useHistory();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (`/search/${inputValue}` !== history.location.pathname) {
            deletePhotos();
            history.push(`/search/${inputValue}`);
        }
    };

    const handleChange = (value: string) => {
        setState({
            isShownCloseButton: value.length > 0,
            inputValue: value
        });
    };

    const handleClick = () => {
        setState({
            isShownCloseButton: false,
            inputValue: ''
        });
    };

    return (
        <form
            className={styles.searchForm}
            onSubmit={handleSubmit}
            title="Search"
        >
            <button className={styles.searchButton} type="submit">
                <SearchSVG />
            </button>
            <Break size={5} />
            <input
                className={styles.searchInput}
                value={inputValue}
                required
                pattern="^[a-zA-Z]+$"
                placeholder="Search photos"
                title="Используйте буквы латинского алфавита"
                onChange={(e) => handleChange(e.currentTarget.value)} 
            />
            {isShownCloseButton && (
                <>
                    <Break size={5} />
                    <ButtonComponent
                        className={styles.closeButton}
                        type="close"
                        color="black"
                        title="Close"
                        onClick={handleClick}
                    />
                </>
            )}
        </form>
    );
}
