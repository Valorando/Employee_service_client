import './PostComponent.css';
import React, { useState } from 'react';
import { addEmployee } from '../Service/api'; 

export default function PostComponent() {
    const [createId, setCreateId] = useState(''); 
    const [name, setName] = useState(''); 
    const [phoneNumber, setPhoneNumber] = useState(''); 
    const [email, setEmail] = useState(''); 
    const [department, setDepartment] = useState(''); 
    const [position, setPosition] = useState(''); 
    const [response, setResponse] = useState(null); 

    const handleAddEmployee = async () => { 
        if (!createId || !name || !phoneNumber || !email || !department || !position) {
            alert('Пожалуйста, заполните все поля.');
            return;
        }
        try {
            const data = await addEmployee(parseInt(createId, 10), name, phoneNumber, email, department, position);
            setResponse("Запись создана"); 
        } catch (error) {
            alert('Ошибка: ' + error);
        }
    };

    return(
        <div className='PostComponent'>
            <input
                value={createId} 
                onChange={(e) => setCreateId(e.target.value)} 
                placeholder="ID записи"
            />
            <input
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder="Имя сотрудника"
            />
            <input
                value={phoneNumber} 
                onChange={(e) => setPhoneNumber(e.target.value)} 
                placeholder="Номер телефона"
            />
            <input
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Email"
            />
            <input
                value={department} 
                onChange={(e) => setDepartment(e.target.value)} 
                placeholder="Отдел"
            />
            <input
                value={position} 
                onChange={(e) => setPosition(e.target.value)} 
                placeholder="Должность"
            />
            <button onClick={handleAddEmployee}>Отправить</button> 
            <hr />
            <p id='responce_header'>Ответ API</p>
                <div id="response">{response}</div>
        </div>
    )
}
