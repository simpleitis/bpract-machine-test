import { createContext, useCallback, useState } from 'react';
import axios from 'axios';

const DataContext = createContext();

function Provider({ children }) {
    const [data, setData] = useState([]);

    const fetchData = useCallback(async () => {
        const response = await axios.get(
            'https://machine-test.cloudmlmdemo.com/api/admin/tool-documents'
        );

        setData(response.data.data.data);
    }, []);

    const deleteRecordById = async (id) => {
        await axios.delete(
            `https://machine-test.cloudmlmdemo.com/api/admin/tool-documents/${id}`
        );

        const updatedData = data.filter((record) => {
            return record.id !== id;
        });
        setData(updatedData);
    };

    const createRecord = async (sortOrder, title, documentUrl) => {
        let formdata = new FormData();

        formdata.append('sort_order', sortOrder);
        formdata.append('title', title);
        formdata.append('document_url', documentUrl);

        const response = await axios.post(
            'https://machine-test.cloudmlmdemo.com/api/admin/tool-documents',
            formdata
        );

        fetchData();
    };

    const editRecordById = async (id, sortOrder, title, documentUrl) => {
        let formdata = new FormData();

        formdata.append('sort_order', sortOrder);
        formdata.append('title', title);
        formdata.append('document_url', documentUrl);
        formdata.append('_method', 'PUT')

        const response = await axios.post(
            `https://machine-test.cloudmlmdemo.com/api/admin/tool-documents/${id}`,
            formdata
        );
        console.log('After edit response')

        fetchData();
    };

    const valueToShare = {
        data,
        deleteRecordById,
        editRecordById,
        createRecord,
        fetchData,
    };

    return (
        <DataContext.Provider value={valueToShare}>
            {children}
        </DataContext.Provider>
    );
}

export { Provider };
export default DataContext;
