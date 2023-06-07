import React, { useState } from 'react';

const CarForm = () => {
    const [carData, setCarData] = useState({ make: '', model: '', year: '' });

    const handleInputChange = (e) => {
        setCarData({ ...carData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Agrega aquí la lógica para enviar los datos del auto a la base de da
        console.log('Datos del auto:', carData);
        setCarData({ make: '', model: '', year: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2 className="text-center mb-4">Registrar Auto</h2>
            <div className="mb-3">
                <label htmlFor="make" className="form-label">Marca:</label>
                <input type="text" id="make" name="make" value={carData.make} onChange={handleInputChange} className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="model" className="form-label">Modelo:</label>
                <input type="text" id="model" name="model" value={carData.model} onChange={handleInputChange} className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="year" className="form-label">Año:</label>
                <input type="text" id="year" name="year" value={carData.year} onChange={handleInputChange} className="form-control" />
            </div>
            <button type="submit" className="btn btn-primary btn-lg btn-block">Registrar</button>
        </form>
    );
};

export default CarForm;

