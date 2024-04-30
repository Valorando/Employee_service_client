import axios from 'axios';

const BASE_URL = 'https://localhost:7242/employees';

export const getEmployee = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}${id}`);
        return response.data;
    } catch (error) {
        console.error('Error getting employee:', error);
        throw error;
    }
};

export const addEmployee = async (id, name, phoneNumber, email, department, position) => {
    try {
        const response = await axios.post(`${BASE_URL}`, { id, name, phoneNumber, email, department, position });
        return response.data;
    } catch (error) {
        console.error('Error adding employee:', error);
        throw error;
    }
};

export const updateEmployee = async (id, name, phoneNumber, email, department, position) => {
    try {
        const response = await axios.put(`${BASE_URL}`, {id,  name, phoneNumber, email, department, position });
        return response.data;
    } catch (error) {
        console.error('Error updating employee:', error);
        throw error;
    }
};

export const deleteEmployee = async (id) => {
    try {
        const response = await axios.delete(`${BASE_URL}${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting employee:', error);
    }
};
