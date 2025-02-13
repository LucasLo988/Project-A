import { useEffect, useState } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import { helpHttp } from "../helpers/helpHttp";
import Message from "./Message";
import Loader from "./Loader";


const CrudApi = () => {
  const [db, setDb] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let api = helpHttp()
  let url = "https://my-json-server.typicode.com/LucasLo988/DB/santos"

  useEffect(() => {
    setLoading(true);
    api.get(url).then(res => {
      if (!res.err) {
        setDb(res)
        setError(null)
      } else {
        setDb(null)
        setError(res)
      }
      setLoading(false)
    })
  }, [url])

  const createData = (data) => {
    data.id = Date.now();

    let options = {
      headers: { "content-type": "application/json"},
      body: data
    }

    api.post(url, options)
      .then(res => {
        if (!res.err) {
          setDb([...db, res])
        } else {
          setError(res)
        }
      })
  };

  const updateData = (data) => {
    let endpoint = `${url}/${data.id}`

    let options = {
      headers: { "content-type": "application/json"},
      body: data
    }

    api.put(endpoint, options)
      .then(res => {
        if (!res.err) {
          let newData = db.map((el) => (el.id === data.id ? data : el))
          setDb(newData)
          console.log(res)
        } else {
          setError(res)
        }
      })
  };

  const deleteData = (id) => {
    
    let isDelete = window.confirm(
      `¿Estás seguro de eliminar el registro con el id '${id}'?`
    );
    
    let endpoint = `${url}/${id}`

    if (isDelete) {
      let options = {
        headers: { "content-type": "application/json"},
      }
  
      api.del(endpoint, options)
        .then(res => {
          if (!res.err) {
            let newData = db.filter((el) => el.id !== id);
            setDb(newData);
          } else {
            setError(res)
          }
        })
    } else {
      return;
    }
  };

  return (
    <div>
      <h2>CRUD Api</h2>
      <article className="container-content">
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />

        {loading && <Loader />}
        {error && <Message msg={`Error ${error.status}: ${error.statusText}`} bgColor="#dc3545" />}
        {db && <CrudTable
          data={db}
          setDataToEdit={setDataToEdit}
          deleteData={deleteData}
        />}
      </article>
    </div>
  );
};

export default CrudApi;
