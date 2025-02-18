import React, { Component } from 'react';

import { BiLineChart, BiBarChartAlt } from 'react-icons/bi';
import { AiFillDashboard, } from 'react-icons/ai';
import { CgWebsite } from "react-icons/cg";

import { CiCreditCard2 } from "react-icons/ci";
import { TbLogout } from "react-icons/tb";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaCheckCircle, FaTimes, FaMinus, FaPlus } from "react-icons/fa";
import { HiMenu } from 'react-icons/hi';
import { FaPeopleGroup } from "react-icons/fa6";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";


import {
    BsFillCaretLeftFill,
    BsFillCaretDownFill,
    BsCart2,
    BsCartCheck,
    BsCartX,
    BsCartPlus,
    BsCartDash
} from 'react-icons/bs';




const icons = {
    dashboard: AiFillDashboard,
    charts: BiBarChartAlt,
    lineChart: BiLineChart,
    billing: CiCreditCard2,
    logout: TbLogout,
    customerSupport: RiCustomerService2Fill,
    checkmark: FaCheckCircle,
    times: FaTimes,
    minus: FaMinus,
    plus: FaPlus,
    menu: HiMenu,
    website: CgWebsite,
    people: FaPeopleGroup,
    leftArrow: FaArrowLeftLong,
    rightArrow: FaArrowRightLong,
    Cart: BsCart2,
    AddCart: BsCartPlus,
    AddedCart: BsCartCheck,
    RemoveCart: BsCartDash,
    EmptyCart: BsCartX,

};

export type MyIconType = keyof typeof icons;

const MyIcon: React.FC<{
    name: MyIconType;
    className?: string;
    title?: string;
    color?: string;
    onClick?: () => void;
}> = (props) => {
    const Comp = icons[props.name] as any;

    if (!Comp) {
        return null;
    }

    return (
        <Comp
            className={props.className}
            onClick={props.onClick}
            title={props.title}
            style={{ color: props.color }}
        />
    );
};

export default MyIcon;

