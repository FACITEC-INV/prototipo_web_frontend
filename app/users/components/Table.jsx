"use client";

import { $isLoading } from "@/stores/users/formStatus";
import { handelSearch, handleDelete, handleEdit } from "@/stores/users/tableActions";
import { $searchTerm, $tableData } from "@/stores/users/tableStatus";
import { useStore } from "@nanostores/react";

const Table = () => {
  const data = useStore($tableData);
  const searchTerm = useStore($searchTerm);
  const isLoading = useStore($isLoading);

  return (
    <div className="card bg-neutral-200 shadow-sm">
      <div className="card-body">

        <div className="flex">
          <div className="basis-2/3">
            <h2 className="card-title justify-center">Usuarios registrados</h2>
          </div>
          <div className="basis-2/3">
            <label className="input input-sm">
              <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor" > <circle cx="11" cy="11" r="8"></circle> <path d="m21 21-4.3-4.3"></path> </g> </svg>
              <input
                type="search"
                onChange={ev => handelSearch(ev.target.value)}
                value={searchTerm ?? ''}
                className="grow"
                placeholder="Buscar"
              />
            </label>
          </div>
        </div>
        <div className="max-h-77 overflow-y-auto overflow-x-hidden rounded-box border border-base-content/5 bg-base-200">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>FullName</th>
                <th>Username</th>
                <th>Role</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {
                data.map((i, index) => (
                  <tr key={i.id} className="hover:bg-base-300">
                    <td>{index + 1}</td>
                    <td>{i.fullName}</td>
                    <td>{i.username}</td>
                    <td>{i.role}</td>
                    <td>
                      <div className="tooltip tooltip-left" data-tip="Editar">
                        <button
                          className="btn btn-soft btn-xs btn-primary"
                          onClick={() => handleEdit(i.id)}
                          disabled={isLoading}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-pencil"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" /><path d="M13.5 6.5l4 4" /></svg>
                        </button>
                      </div>
                      <div className="tooltip tooltip-right" data-tip="Eliminar">
                        <button
                          className="btn btn-soft btn-xs btn-secondary"
                          onClick={() => handleDelete(i.id)}
                          disabled={isLoading}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-eraser"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M19 20h-10.5l-4.21 -4.3a1 1 0 0 1 0 -1.41l10 -10a1 1 0 0 1 1.41 0l5 5a1 1 0 0 1 0 1.41l-9.2 9.3" /><path d="M18 13.3l-6.3 -6.3" /></svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
          {!data || data.length === 0 && (
            <div className="alert alert-info bg-info">No hay datos para mostrar</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Table
