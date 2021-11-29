import React from 'react'
import ReactDom from 'react-dom'
import '../style/style.css'

export const EditPostModal=({closeModal})=> {
    return ReactDom.createPortal (
        <div className="overlay">
        <div className="modalEdit">
            <h1>Deleted Successfully</h1>
            <button onClick={closeModal}>OK</button>
        </div>
        </div>,
        document.getElementById('portal')
    )
}


