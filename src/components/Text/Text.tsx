import React from 'react';
import classNames from 'classnames';
import styles from './text.css';

export enum EColors {
    black = 'black',
    lightBlack = 'lightBlack',
    lightGrey = 'lightGrey',
    blackHover = 'blackHover',
    lightGrey_black_hover  = 'lightGrey_black_hover',
    lightGrey_black = 'lightGrey_black'
}

type TTextSize = '_none' | 12 | 14 | 16 | 24 | 30 | 50;

interface ITextProps {
    As?: 'span' | 'a' | 'div';
    size: TTextSize;
    mobileSize?: TTextSize;
    color?: EColors;
    children?: React.ReactNode;
    className?: string;
    href?: string;
    target?: string;
}

export function Text(props: ITextProps) {
    const {
        As = 'span',
        size,
        mobileSize,
        color = 'lightBlack',
        children,
        className,
        href,
        target,
    } = props;
    
    const classes = classNames(
        styles[`s${size}`],
        styles[color],
        { [styles[`m${mobileSize}`]]: mobileSize },
        className
    );

    return (
        <As className={classes} href={href} target={target}>
            {children}
        </As>
    );
}
