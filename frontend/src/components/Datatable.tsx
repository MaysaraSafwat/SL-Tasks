import React from "react";

interface Props<T> {
  data: any[];
  columns: {
    key: any;
    title: string;
    render?: (value: T[keyof T], item: T) => React.ReactNode;
  }[];
  onEdit: (id:number) => void;
  onDelete: (id:number) => void;
}

function DataTable<T>(props: Props<T>) {
  const { data, columns, onEdit, onDelete } = props;

  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {columns.map((column) => (
                    <th
                      key={column.key as string}
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {column.title}
                    </th>
                  ))}
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.map((item) => (
                  <tr key={item.id}>
                    {columns.map((column) => (
                      <td
                        key={`${item.id}-${column.key}`}
                        className="px-6 py-4 whitespace-nowrap"
                      >
                        {column.render
                          ? column.render(item[column.key], item)
                          : item[column.key]}
                      </td>
                    ))}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button
                        className="px-5 py-2 rounded-md bg-green-500 mr-2 text-white hover:bg-green-200"
                        onClick={() => onEdit(item.id)}
                      >
                        Edit
                      </button>
                      <button
                        className="px-5 py-2 rounded-md bg-red-500 text-white hover:bg-red-200"
                        onClick={() => onDelete(item.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataTable;
