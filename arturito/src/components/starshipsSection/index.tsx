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
        title: 'model',
        dataIndex: 'model',
        key: 'model',
    },
    {
        title: 'manufacturer',
        dataIndex: 'manufacturer',
        key: 'manufacturer',
    },
    {
        title: 'passengers',
        dataIndex: 'passengers',
        key: 'ppassengers',
        render: (passengers: string) =>
          parseInt(passengers)
            ? parseInt(passengers).toLocaleString('es-AR')
            : passengers,
    },

    {
        title: 'films_count',
        dataIndex: 'films',
        key: 'films_count',
        render: (films: string[]) => films.length,
    },
]

const Starships=function(){
    const {data, error}=useSWR('/starships',swGet);

    if(error){
        return <div className="px-2">NO HAY NAVES!!</div>
    }
    if(!data){
        return <div className="px-2">Cargando...</div>
    }

    return(
        <div>
            <Table columns={columns} data={data.results} /* :D */ />
        </div>
    )
}

export default Starships;