import React from "react";
import EmployeeContent from "../Components/EmployeeContent.js";
import "../Styles/EmployeeContent.css";

function EmployeeTable({ headings, users, handleSort }) {
    return (
        <div className="employeeTable mt-5">
            <table
                id="table"
                className="table table-striped table-hover table-condensed"
            >
                <thead>
                    <tr>
                        {headings.map(({ name, width }) => {
                            return (
                                <th
                                    className="col"
                                    key={name}
                                    style={{ width }}
                                    onClick={() => {
                                        handleSort(name.toLowerCase());
                                    }}
                                >
                                    {name}
                                    <span className="pointer"></span>
                                </th>
                            );
                        })}
                    </tr>
                </thead>

                <EmployeeContent users={users} />
            </table>
        </div>
    );
}

export default EmployeeTable;
