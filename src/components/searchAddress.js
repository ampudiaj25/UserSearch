import React, { useEffect, useState } from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';

const SearchAddress = (props) => {
    const { userAddresses, onSelectUser, setSelectAddress } = props
    const [selected, setSelected] = useState([]);
    const [manualInput, setManualInput] = useState('');

    useEffect(() => {
        if (selected.length > 0) {
            setSelectAddress(selected[0].addres);
            onSelectUser(selected[0]); 
        }else{
            setSelectAddress(manualInput);
        }
    }, [selected,manualInput]);

    const handleSearch = (query) => {
        const filteredResults = userAddresses.filter((item) =>
            item.userAddresses.toLowerCase().includes(query.toLowerCase())
        );
        console.log(filteredResults);
        return filteredResults;
    };

    return (
        <Typeahead
            id="search-component"
            labelKey="addres"
            options={userAddresses}
            placeholder="Buscar..."
            selected={selected}
            onChange={(selectedItems) => {
                setSelected(selectedItems);
            }}
            onSearch={(query) => handleSearch(query)}
            onInputChange={(input) => {
                setManualInput(input);
            }}
          
        />
    );
};
export default SearchAddress;