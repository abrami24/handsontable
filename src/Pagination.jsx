import React from "react";
import { Paginator } from "primereact/paginator";
import "./pagination.css";

export default function Pagination({
  totalRecords,
  first,
  rows,
  onChange = null,
}) {
  const template2 = {
    layout: onChange
      ? "CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink"
      : "CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink",

    CurrentPageReport: (options) => {
      return (
        <span
          className="p-pagination-show-page"
          style={{ color: "var(--text-color)", userSelect: "none" }}
        >
          Affichage de {options.first} - {options.last} sur{" "}
          {options.totalRecords}
        </span>
      );
    },
  };

  const onPageChange = (event) => {
    console.log("test ////", event);
  };

  return (
    <div className="card mt-4 pb-4">
      <Paginator
        template={template2}
        first={first}
        rows={parseInt(rows)}
        totalRecords={totalRecords}
        onPageChange={onChange ? onChange : onPageChange}
      />
    </div>
  );
}
