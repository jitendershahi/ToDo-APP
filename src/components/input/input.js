import React from 'react'


export const Input = (props) => {
    let wrapperClass = "form-group"

    return (
        <div className={wrapperClass}> 
        <b><label htmlFor={props.htmlname}>{props.label}</label></b>
        <div>
          <input type="text" 
              value={props.value}
              placeholder={props.placeholder} 
              name={props.name}
              onChange={props.clicked}
              className="form-control"/>
          </div>
          <div className="text-danger">{props.errorname.title}</div>
      </div>
    )
}

export default Input;