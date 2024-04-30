import './PutComponent.css';
import React, { useState } from 'react';
import { updateEmployee } from '../Service/api'; 

export default function PutComponent() {
    const [editId, setEditId] = useState(''); 
    const [editName, setEditName] = useState(''); 
    const [editPhoneNumber, setEditPhoneNumber] = useState(''); 
    const [editEmail, setEditEmail] = useState(''); 
    const [editDepartment, setEditDepartment] = useState(''); 
    const [editPosition, setEditPosition] = useState(''); 
    const [response, setResponse] = useState(null); 

    const handleEditEmployee = async () => { 
        if (!editId || !editName || !editPhoneNumber || !editEmail || !editDepartment || !editPosition) {
            alert('Пожалуйста, заполните все поля.');
            return;
        }
        try {
            const data = await updateEmployee(parseInt(editId, 10), editName, editPhoneNumber, editEmail, editDepartment, editPosition);
            setResponse('Запись обновлена'); 
        } catch (error) {
            alert('Ошибка: ' + error);
        }
    };
    
    return(
        <div className='PutComponent'>
            <input
                value={editId} 
                onChange={(e) => setEditId(e.target.value)} 
                placeholder="ID записи"
            />
            <input
                value={editName} 
                onChange={(e) => setEditName(e.target.value)} 
                placeholder="Имя сотрудника"
            />
            <input
                value={editPhoneNumber} 
                onChange={(e) => setEditPhoneNumber(e.target.value)} 
                placeholder="Номер телефона"
            />
            <input
                value={editEmail} 
                onChange={(e) => setEditEmail(e.target.value)} 
                placeholder="Email"
            />
            <input
                value={editDepartment} 
                onChange={(e) => setEditDepartment(e.target.value)} 
                placeholder="Отдел"
            />
            <input
                value={editPosition} 
                onChange={(e) => setEditPosition(e.target.value)} 
                placeholder="Должность"
            />
            <button onClick={handleEditEmployee}>Отправить</button> 
            <hr />
            <p id='responce_header'>Ответ API</p>
            {response && (
                <div id="response">
                    <p>{response}</p>
                </div>
            )}
        </div>
    )
}
