import {useAppSelector} from "../../store/store";
import {Table} from "react-bootstrap";
import React, {useState} from "react";
import BaseCurrency from "../BaseCurrensy";

export const RateTable = () => {
    const {currencies, rates} = useAppSelector(state => state)
    const currentCurrencies: string[][] = []

    const userLang = navigator.language
    const initialState = userLang.startsWith('ru') ? 'RUB' : 'USD'
    let [baseVal, setBaseVal] = useState(() => initialState);

    const updateBaseVal = (e: React.MouseEvent<HTMLInputElement>) => {
        e.preventDefault();
        const input = e.target as HTMLElement;
        setBaseVal(input.innerText);
    };

    Object.keys(currencies).forEach(key => {
        // @ts-ignore
        currentCurrencies.push([key, rates[key], currencies[key]])
    })

    let div = 1;
    Object.entries(rates).forEach(([key, value]) => {
        if (key === baseVal) {
            div = value
        }
    });

    const date = new Date();
    return (
        <>
            <div className='header'>
                <div><h2>Курс валют на сегодня</h2></div>
                <div>{date.toDateString()}</div>
                <div><BaseCurrency updateBaseVal={updateBaseVal} baseVal={baseVal} /></div>
            </div>
            <Table striped bordered hover variant="dark">
                <thead>
                <tr>
                    <th>Код</th>
                    <th>Валюта</th>
                    <th>Курс (по отношению к {baseVal})</th>
                </tr>
                </thead>
                <tbody>
                {Object.entries(currentCurrencies).map(([key, [code, nominal, name]]) => {
                    return (
                        <tr key={key}>
                            <td>{code}</td>
                            <td>{name}</td>
                            <td>{(Number(nominal) / div)}</td>
                        </tr>
                    )
                })}
                </tbody>
            </Table>
        </>
    );
};

