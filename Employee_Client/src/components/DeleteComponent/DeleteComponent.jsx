import './DeleteComponent.css';
import React, { useState } from 'react';
import { deleteEmployee } from '../Service/api'; 

export default function DeleteComponent() {
    const [deleteId, setDeleteId] = useState(''); 
    const [response, setResponse] = useState(null); 

    const handleDeleteEmployee = async () => { 
        if (!deleteId) {
            alert('Пожалуйста, введите ID сотрудника.');
            return;
        }
        try {
            await deleteEmployee(parseInt(deleteId, 10)); 
            setResponse('Запись удалена'); 
        } catch (error) {
            alert('Ошибка: ' + error);
        }
    };

    return(
        <div className='DeleteComponent'>
            <input
                value={deleteId} 
                onChange={(e) => setDeleteId(e.target.value)} 
                placeholder="Введите ID сотрудника"
            />
            <button onClick={handleDeleteEmployee}>Отправить</button> 
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
