import React from 'react';

const Background = ( { children } ) =>
{
    return (
        <body className="bg-white dark:bg-black ">
            {children}
        </body>
    )
}

export default Background;