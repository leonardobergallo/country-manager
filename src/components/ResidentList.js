import React from 'react';

const ResidentList = () => {
    // Agrega aquí la lógica para obtener los residentes temporales de la base de datos
    const residents = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' },
        { id: 3, name: 'David Johnson' },
    ];

    return (
        <div>
            <h2>Resident List</h2>
            <ul>
                {residents.map((resident) => (
                    <li key={resident.id}>{resident.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default ResidentList;

