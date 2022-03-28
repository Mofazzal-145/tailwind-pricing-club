import React from 'react';

const Link = (props) => {
    const {id, name, link} = props.route;
    return (
        <div>
             <li>
                 <a href={link}>{name}</a>
             </li>
        </div>
    );
};

export default Link;