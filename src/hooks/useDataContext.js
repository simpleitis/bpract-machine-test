import { useContext } from 'react';
import DataContext from '../context/data';

function useDataContext() {
    return useContext(DataContext);
}

export default useDataContext;
