import React from 'react';


const Popup = props => {

    return (
        <div className='popup-box'>
            <div className='box'>
                <span className='btn-close' onClick={props.handleClose}>Apply Science</span>
                {props.content}
                </div>
                </div>
    );
};

export default Popup;

