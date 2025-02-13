import React from "react";

const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {
  let { name, constellation, id } = el;

  return (
    <tr>
      <td>{name}</td>
      <td>{constellation}</td>
      <td className="row-buttons">
        <button className="yellow" onClick={() => setDataToEdit(el)}>Editar</button>
        <button className="red" onClick={() => deleteData(id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
