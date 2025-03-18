import DataTable from 'react-data-table-component';
import React, { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import {Button} from 'react-bootstrap';
import { Pencil, Trash, TypeOutline, X } from "lucide-react";


const TextField = styled.input`
	height: 32px;
	width: 200px;
	border-radius: 3px;
	border-top-left-radius: 5px;
	border-bottom-left-radius: 5px;
	border-top-right-radius: 0;
	border-bottom-right-radius: 0;
	border: 1px solid #e5e5e5;
	padding: 0 32px 0 16px;

	&:hover {
		cursor: pointer;
	}
`;

const ClearButton = styled(Button)`
	border-top-left-radius: 0;
	border-bottom-left-radius: 0;
	border-top-right-radius: 5px;
	border-bottom-right-radius: 5px;
	height: 34px;
	width: 32px;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
`;


const FilterComponent = ({ filterText, onFilter, onClear }) => (
	<>
		<TextField
			id="search"
			type="text"
			placeholder="Buscar"
			aria-label="Search Input"
			value={filterText}
			onChange={onFilter}
		/>
		<Button variant="outline-primary" size="sm" onClick={onClear}>
			<X/>
		</Button>
	</>
);

const Buttons = ({ row }) => {
    return (
        <>
            <button className='btn btn-sm btn-outline-success m-1'><Pencil size={12} /></button>
            <button className='btn btn-sm btn-outline-danger m-1'><Trash size={12}/></button>
        </>
    );
};

const columns = [
    {
        name: 'Title',
        selector: row => row.title,
    },
    {
        name: 'Year',
        selector: row => row.year,
    },
    {
        name: '',
        cell: row => <Buttons row={row} />,
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
    }
];

const data = [
    {
        id: 1,
        title: 'Beetlejuice',
        year: '1988',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
];

const DataTableList = () => {
    const [filterText, setFilterText] = useState('');
	const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
    const paginationComponentOptions = {
        rowsPerPageText: 'Filas por página',
        rangeSeparatorText: 'de',
        selectAllRowsItem: true,
        selectAllRowsItemText: 'Todos',
    };
	const filteredItems = data.filter(
		item => item.title && item.title.toLowerCase().includes(filterText.toLowerCase()),
	);

	const subHeaderComponentMemo = useMemo(() => {
		const handleClear = () => {
			if (filterText) {
				setResetPaginationToggle(!resetPaginationToggle);
				setFilterText('');
			}
		};

		return (
			<FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
		);
	}, [filterText, resetPaginationToggle])
    return (
        <DataTable
            columns={columns}
            data={filteredItems}
            subHeader
			subHeaderComponent={subHeaderComponentMemo}
			persistTableHead
            pagination 
            paginationComponentOptions={paginationComponentOptions}
        />
    );
};

export default DataTableList;
