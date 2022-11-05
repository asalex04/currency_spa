import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import {useAppSelector} from "../store/store";

interface BaseCurrencyProps {
    baseVal: string
    updateBaseVal: React.MouseEventHandler<HTMLElement>
}
const BaseCurrency = (props: BaseCurrencyProps) => {
    const {currencies} = useAppSelector(state => state)
    const charCode: string[] = [];
    Object.keys(currencies).forEach((key) => {
        charCode.push(key);
    });

    return (
        <>
            <DropdownButton id="dropdown-item-button" title={`base currency ${props.baseVal}`} variant={'dark'}>
                {charCode.map((val, id) =>
                    <Dropdown.Item key={id} onClick={props.updateBaseVal}>{val}</Dropdown.Item>
                )}
            </DropdownButton>
        </>
    )
}


export default BaseCurrency;
