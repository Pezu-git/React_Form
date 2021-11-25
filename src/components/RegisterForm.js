import React from "react";
import { useState } from "react";

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
        <form className="mainForm" onSubmit={onFormSubmit}>
            <div className="RegisterForm-FormControl">
                <label htmlFor="username">Имя</label>
                <input 
                    className="RegisterForm-Input"
                    type="text" 
                    name="username" 
                    id="username" 
                    onChange={onInputChange} 
                    value={state.username} 
                />
            </div>
            <div className="RegisterForm-FormControl">
                <label htmlFor="password">Пароль</label>
                <input 
                    className="RegisterForm-Input"
                    type="text" 
                    name="password" 
                    id="password" 
                    onChange={onInputChange} 
                    value={state.password} 
                />
            </div>
            <div className="RegisterForm-FormControl">
                <label htmlFor="agree">Согласен</label>
                <input 
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
                        <label>{getParticipationTitle(participation[0])}</label>
                        <input 
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
            <button type="submit" >Отправить</button> 
        </form>
    )
}

