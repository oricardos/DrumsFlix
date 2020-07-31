import React from 'react'

function FormFild({ label, type, value, name, onChange }) {
    return (
        <div>
            <label>
                {label}

                    <input
                    type={type}
                    value={value}
                    name={name}
                    onChange={onChange} />
            </label>
        </div>
    )
}

export default FormFild