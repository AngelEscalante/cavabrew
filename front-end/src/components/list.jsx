import React, { useMemo } from 'react';
import Select from 'react-select';

const SelectedData = ({ lista = [] }) => {
    // Memoizar la lista de opciones para evitar cálculos innecesarios
    const options = useMemo(() => [{ value: '', label: 'Elige una opción', isDisabled: true }, ...lista], [lista]);

    return <Select options={options} placeholder="Seleccione" />;
};

export default SelectedData;