import React from 'react';
import { SelectContainerStyled, SelectWrapper } from './SelectStyles';
import { VscTriangleDown } from "react-icons/vsc";

const Select = ({ children, icon, onChange, value }) => {
    return (
        <SelectContainerStyled>
            <SelectWrapper onChange={onChange} value={value}>
                {children}
            </SelectWrapper>
            <VscTriangleDown className='arrow' />
            {icon}
        </SelectContainerStyled>
    );
};

export default Select;
