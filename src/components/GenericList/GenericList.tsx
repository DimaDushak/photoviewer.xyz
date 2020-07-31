import React from 'react';
import { NOOP } from '../../utils/helpers';

export interface IGenericListItem {
    As?: 'a' | 'li' | 'button' | 'div' | 'label';
    id: string;
    content: string | React.ReactNode;
    onClick?: () => void;
    className?: string;
    href?: string;
}

interface IGenericListProps {
    list: IGenericListItem[];
}

export function GenericList({ list }: IGenericListProps) {
    return (
        <>
            {list.map(({ As = 'li', href, onClick = NOOP, id, content, className }) => (
                <As
                    key={id}
                    onClick={onClick}
                    className={className}
                    href={href}
                >{content}</As>
            ))}
        </>
    );
}
