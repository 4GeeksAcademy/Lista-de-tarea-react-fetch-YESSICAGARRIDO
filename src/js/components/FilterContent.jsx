import React from "react";

function FilterContent({ children }) {
    return (
        <div className="filter-content">
            {children} 
        </div>

    )
}
function itelemLeft(total = 0) {
    return (
        <p className="total">
            {total}</p>
    )
}
export { FilterContent, itelemLeft};