import React from 'react';

export const Section = ({id, className='', children}) => {
    return (
        <section id={id} className={`section ${className}`}>
            <div className="container">
                {children}
            </div>
        </section>
    );
};

