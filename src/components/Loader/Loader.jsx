import React from 'react'

const Loader = () => {
    return (
        <div className='spinner'>
            <div class="spinner-grow m-5" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    );
}

export default Loader