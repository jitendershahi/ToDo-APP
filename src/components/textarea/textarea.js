import React from 'react'


export const TextArea = (props) => {
    let wrapperClass = "form-group"

    return (
        <div className={wrapperClass}> 
        <b><label htmlFor={props.htmlname}>{props.label}</label></b>
        <div>
          <textarea type="text" 
              cols="50" rows="4"
              value={props.value}
              placeholder={props.placeholder} 
              name={props.name}
              onChange={props.clicked}
              className="form-control">
              </textarea>
          </div>
          <div className="text-danger">{props.errorname.body}</div>
      </div>
    )
}

export default TextArea;