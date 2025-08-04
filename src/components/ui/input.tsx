import React from 'react'

type InputProps={
    placeholder?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    name: string;
    id?: string;
    label?: string;
}


const input = ({placeholder, value, onChange, className, name, id, label}: InputProps) => {

  return (
    <div>
        <label htmlFor={id}>{label}</label>
        <input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={className}
        name={name}
        id={id}
        />
    </div>
  )
}

export default input