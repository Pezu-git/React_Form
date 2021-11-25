import React from "react";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const INITIAL_STATE = {
    username: '',
    password: '',
    agree: '',
    participation: '',
};

const PARTICIPATION_ECONOM = 0;
const PARTICIPATION_BUISNESS = 1;
const PARTICIPATION_VIP = 2;

const PARTICIPATION = [
    [PARTICIPATION_ECONOM, 'Эконом'],
    [PARTICIPATION_BUISNESS, 'Бизнес'],
    [PARTICIPATION_VIP, 'VIP'],
]

function getParticipationTitle(participation) {
    return PARTICIPATION.find(p => p[0] === participation)[1];
}

export function RegisterForm() {
    const [state, setState] = useState(INITIAL_STATE)
    
    const onInputChange = (e) => {
        const field = e.target.name;
        const valueField = e.target.type === 'checkbox' ? 'checked' : 'value';
        return setState(prev => ({...prev, [field]: e.target[valueField]}));
    }

    const onFormSubmit = (e) => {
        console.log('onFormSubmit');
        console.log(state)
        e.preventDefault();

    }

    return(
        <Form onSubmit={onFormSubmit}>
            <div className="RegisterForm-FormControl">
                <Form.Label htmlFor="username">Имя</Form.Label>
                <Form.Control 
                    className="RegisterForm-Input"
                    type="text" 
                    name="username" 
                    id="username" 
                    onChange={onInputChange} 
                    value={state.username} 
                />
            </div>
            <div className="RegisterForm-FormControl">
                <Form.Label htmlFor="password">Пароль</Form.Label>
                <Form.Control 
                    className="RegisterForm-Input"
                    type="text" 
                    name="password" 
                    id="password" 
                    onChange={onInputChange} 
                    value={state.password} 
                />
            </div>
            <div className="RegisterForm-FormControl">
                <Form.Label htmlFor="agree">Согласен</Form.Label>
                <Form.Check 
                    className="RegisterForm-Checkbox"
                    type="checkbox" 
                    name="agree" 
                    id="agree" 
                    onChange={onInputChange} 
                    checked={state.agree} 
                />
            </div>
            <div className="RegisterForm-FormControl">
                {PARTICIPATION.map(participation => 
                    <div key={participation[0]}>
                        <Form.Label>{getParticipationTitle(participation[0])}</Form.Label>
                        <Form.Check 
                            className="RegisterForm-Checkbox"
                            type="radio" 
                            name="participation" 
                            onChange={onInputChange} 
                            checked={state.participation === String(participation[0])} 
                            value={participation[0]}
                        />
                    </div>
                )}  
            </div>
            <Button type="submit" >Отправить</Button> 
        </Form>
    )
}

