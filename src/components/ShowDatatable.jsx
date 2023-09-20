import React from "react";

const ShowDatatable = ({ data }) => {
  return (
    <table style={{ margin: "50px auto" }}>
      <thead>
        <tr>
          <th>Color</th>
          <th>Name</th>
          <th>Pantone value</th>
          <th>Year</th>
        </tr>
      </thead>
      <tbody>
        {data.length
          ? data.map((item) => (
              <tr key={item.id}>
                <td style={{ color: `${item.color}` }}>{item.color}</td>
                <td>{item.name}</td>
                <td>{item.pantone_value}</td>
                <td>{item.year}</td>
              </tr>
            ))
          : null}
      </tbody>
    </table>
  );
};

export default ShowDatatable;
