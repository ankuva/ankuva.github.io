import React from 'react';

export const Title = ({title, right=false}) => {
    return (
        <div className="heading_block">
            <hr/>
            <h2 className={right ? "heading right" : "heading"}>{title}</h2>
            <hr/>
        </div>
    );
};

