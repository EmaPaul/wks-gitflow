import useSWR from 'swr';

import { swGet } from '../../utils/fetcher';
import Table from '../Table';


const columns=[

    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },

    {
        title: 'birth_year',
        dataIndex: 'birth_year',
        key: 'birth_year',
    },

    {
        title: 'height',
        dataIndex: 'height',
        key: 'height',
        render: (height: string) =>
          parseInt(height)
            ? parseInt(height).toLocaleString('es-AR')
            : height,
    },

    {
        title: 'films_count',
        dataIndex: 'films',
        key: 'films_count',
        render: (films: string[]) => films.length,
    },
]

const People= function (){
    const {data, error} = useSWR('/people', swGet);
    
    if(error){
        return <div className="px-2">NO HAY PERSONAJES!!</div>
    }

    if(!data){
        return <div className="px-2">Cargando...</div>;
    }

    return(
        <div>
            <Table columns={columns} data={data.results}/>
        </div>
    )
}

export default People;