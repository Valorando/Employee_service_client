import './GetComponent.css';
import React, { useState } from 'react';
import { getEmployee } from '../Service/api'; 

export default function GetComponent() {
    const [getId, setGetId] = useState(''); 
    const [employee, setEmployee] = useState(null); 

    const handleGetEmployee = async () => { 
        if (!getId) {
            alert('Пожалуйста, введите ID записи.');
            return;
        }
        try {
            let data = await getEmployee(parseInt(getId, 10)); 
            setEmployee(data); 
        } catch (error) {
            alert('Ошибка: ' + error);
        }
    };

    return(
        <div className='GetComponent'>
            <input
                id='text1'
                value={getId} 
                onChange={(e) => setGetId(e.target.value)} 
                placeholder="Введите ID записи"
            />
            <button onClick={handleGetEmployee}>Отправить</button> 
            <hr />
            <p id='responce_header'>Ответ API</p>
            {employee && ( 
                <div id="response">
                    <p>Информация о запрошенной записи</p>
                    <p>ID: {employee.id}</p> 
                    <p>Name: {employee.name}</p> 
                    <p>Phone Number: {employee.phoneNumber}</p> 
                    <p>Email: {employee.email}</p> 
                    <p>Department: {employee.department}</p> 
                    <p>Position: {employee.position}</p> 
                </div>
            )}
        </div>
    )
}
