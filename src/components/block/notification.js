import React from 'react';

export const Notification = ({text, status, active}) => {
    return (
        <div className={active ? "notification _active" : "notification"}>
            <div className={status ? "notification_data" : "notification_data error"}>
                {text}
            </div>
        </div>
    );
};

