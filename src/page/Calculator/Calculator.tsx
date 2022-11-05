import {SetStateAction, useState} from "react";
import {useAppSelector} from "../../store/store";
import {Button, Form} from "react-bootstrap";

export const Calculator = () => {
    const [state, setState] = useState('');
    const [result, setResult] = useState('');
    const {rates} = useAppSelector(state => state)

    const getValue = (e: any) => {
        e.preventDefault();
        const namesCur = Object.keys(rates)
        const regexp = /^[\d]+\s[a-zA-Z]{3}\sto\s[a-zA-Z]{3}$/
        if (!regexp.test(state)) {
            alert('Введите корректное выражение')
        } else {
            const [amount, curIn, , curOut] = state.split(' ');
            if (!namesCur.includes(curIn.toUpperCase()) || !namesCur.includes(curOut.toUpperCase())) {
                alert('Ошибка в наименовании валюты')
            }
            const valueIn = Object.entries(rates).find(([key, ]) => key === curIn.toUpperCase())
            const valueOut = Object.entries(rates).find(([key, ]) => key === curOut.toUpperCase())
            const result = valueOut && valueIn ? Number(amount) * Number(valueOut[1]) / Number(valueIn[1]) : 0
            setResult(`${result.toFixed(2)} ${curOut}`)
        }
        return result
    };

    const handleChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        setState(e.target.value)
    }

    return (
        <>
            <h1>Calculator</h1>
            <div className="container-fluid">
                <div className="row justify-content-center pt-10">
                    <div className="col-sm-4">
                        <Form onSubmit={getValue} className="p-3">
                            <Form.Group>
                                <Form.Control type='text' placeholder='e.g. 15 usd to rub' onChange={handleChange}
                                              value={state}/>
                            </Form.Group>
                            <Button type="submit" variant="outline-primary">Calculate</Button>
                            <Form.Group>
                                <Form.Control type='text' placeholder='result' value={result} readOnly={true}/>
                            </Form.Group>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Calculator;

