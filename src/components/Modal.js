import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import useDataContext from '../hooks/useDataContext';

function Modal({ onClose, editData }) {
    const [sortOrder, setSortOrder] = useState(editData?.sort_order);
    const [title, setTitle] = useState(editData?.title);
    const [documentUrl, setDocumentUrl] = useState('');

    const { editRecordById } = useDataContext();

    const handleSubmit = async (e) => {
        e.preventDefault();

        editRecordById(editData.id, sortOrder, title, documentUrl);
        onClose();
    };

    useEffect(() => {
        document.body.classList.add('overflow-hidden');

        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, []);

    return ReactDOM.createPortal(
        <div>
            <div
                onClick={onClose}
                className="fixed inset-0 bg-gray-300 opacity-80"
            ></div>
            <div className="fixed inset-40 p-10 bg-white">
                <div className="flex flex-col justify-between h-full">
                    <form
                        className="flex flex-col gap-y-10"
                        onSubmit={handleSubmit}
                    >
                        <div>
                            <label>Sort Order: </label>
                            <input
                                className="border"
                                value={sortOrder}
                                onChange={(e) => setSortOrder(e.target.value)}
                            />
                        </div>

                        <div>
                            <label>Title: </label>
                            <input
                                className="border"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>

                        <div>
                            <label>Document URL: </label>
                            <input
                                type="file"
                                className="border"
                                onChange={(e) =>
                                    setDocumentUrl(e.target.files[0])
                                }
                            />
                        </div>
                        <button className="mx-10 border">Submit</button>
                    </form>
                </div>
            </div>
        </div>,
        document.querySelector('.modal-container')
    );
}

export default Modal;
