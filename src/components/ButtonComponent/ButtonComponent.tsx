import React from 'react';
import classNames from 'classnames';
import styles from './buttoncomponent.css';

type TButton = 'arrow6' | 'close';
type TColor = 'white' | 'black';

interface IButtonComponent {
    type: TButton;
    color: TColor;
    className?: string;
    noActive?: boolean;
    title?: string;
    onClick: () => void;
}

export function ButtonComponent(props: IButtonComponent) {
    const { type, color, className, noActive, title, onClick } = props;
    const classes = classNames(
        styles.button,
        className,
        { 'noActive': noActive },
        { [styles[`type_${type}`]]: type },
        { [styles[`col_${color}`]]: color }
    );

    return (
        <button onClick={onClick} className={classes} title={title}>
            <span></span>
            <span></span>
        </button>
    );
}
