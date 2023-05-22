import React from 'react';

function PageHeader({title}) {
    return (
        <div className="item d-flex align-items-center txt-title">
            <h6 className="mb-0 fw-bold">{title}</h6>
        </div>
    );
}

export default PageHeader;