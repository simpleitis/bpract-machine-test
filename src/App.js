import { useContext, useEffect, useState } from 'react';
import Modal from './components/Modal';
import UploadModal from './components/UploadModal';
import DataContext from './context/data';
import { AiOutlineArrowDown } from 'react-icons/ai';

function App() {
    const { data, fetchData, deleteRecordById } = useContext(DataContext);

    const [showModal, setShowModal] = useState(false);
    const [addShowModal, setAddShowModal] = useState(false);
    const [editRecord, setEditRecord] = useState();

    useEffect(() => {
        fetchData();
    }, []);

    const renderedDataTable = data.map((record) => {
        return (
            <tr key={record.id} className="bg-white border-b ">
                <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                    {record.id}
                </th>
                <td className="px-6 py-4">{record.title}</td>
                <td className="px-6 py-4">{record.sort_order}</td>
                <td className="px-6 py-4">
                    <a href={record.doc_url} target="_blank">
                        <div className="flex">
                            PDF
                            <AiOutlineArrowDown className="mt-1" />
                        </div>
                    </a>
                </td>
                <td className="px-6 py-4">{record.created_at}</td>
                <td className="px-6 py-4">
                    <p
                        onClick={() => handleEdit(record)}
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer"
                    >
                        Edit
                    </p>
                </td>
                <td className="px-6 py-4">
                    <p
                        onClick={() => handleDelete(record)}
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer"
                    >
                        Delete
                    </p>
                </td>
            </tr>
        );
    });

    const handleClose = () => {
        setShowModal(false);
    };

    const handleAddModalClose = () => {
        setAddShowModal(false);
    };

    const handleEdit = (record) => {
        setShowModal(!showModal);
        setEditRecord(record);
    };

    const handleDelete = (record) => {
        deleteRecordById(record.id);
    };

    const handleAdd = () => {
        setAddShowModal(!addShowModal);
    };

    return (
        <div className="App">
            <>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-20">
                    <table className="w-full text-sm text-left text-gray-500 ">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    No
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    File Title
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Sort Order
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Download
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Created
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Edit
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Delete
                                </th>
                            </tr>
                        </thead>
                        <tbody>{renderedDataTable}</tbody>
                    </table>
                </div>

                {showModal && (
                    <Modal editData={editRecord} onClose={handleClose} />
                )}
                {addShowModal && <UploadModal onClose={handleAddModalClose} />}
                <button
                    className="sm:rounded-lg mx-20 border p-5 mt-3 bg-green-200"
                    onClick={handleAdd}
                >
                    Add new record
                </button>
            </>
        </div>
    );
}

export default App;
