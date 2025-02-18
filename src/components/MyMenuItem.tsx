import React, { ReactNode } from 'react';

import MyIcon, { MyIconType } from './MyIcon';
import Link from 'next/link';

const sharedClass =
    'rounded-lg px-4 py-1 inline-flex items-center text-md my-1 font-bold transition duration-150 ease-in-out focus:outline-none';
const activeClass = 'text-blue-8 bg-blue-6 bg-opacity-40';
const defaultClass =
    'text-gray-700 hover:text-blue-8 hover:bg-blue-6 hover:bg-opacity-40 focus:text-blue-8';

const MyMenuItem: React.FC<{
    link?: string;
    url?: string;
    active?: boolean;
    className?: string;
    onClick?: () => void;
    icon?: MyIconType;
    toggleDropdown?: () => void,
    children: ReactNode
}> = (props) => {
    if (props.link) {
        return (
            <Link
                href={props.link}
                className={`${sharedClass} ${props.active ? activeClass : defaultClass}  ${props.className
                    } flex`}
                onClick={() => {
                    if (props.onClick) {
                        props.onClick();
                    }
                    if (props.toggleDropdown) {
                        props.toggleDropdown();
                    }
                }}
            >
                {props.icon ? (
                    <div className="w-10">
                        <MyIcon name={props.icon} className="stroke-current " />
                    </div>
                ) : null}
                <div>{props.children}</div>
            </Link>
        );
    }

    return (
        <a
            href={props.url}
            target={'_blank'}
            rel="noopener noreferrer"
            className={`${sharedClass} ${props.active ? activeClass : defaultClass}  ${props.className}`}
            onClick={props.onClick}
        >
            {props.icon ? (
                <div className="w-10">
                    <MyIcon name={props.icon} className="stroke-current fill-current" />
                </div>
            ) : null}
            <div>{props.children}</div>
        </a>
    );
};

export default MyMenuItem;

