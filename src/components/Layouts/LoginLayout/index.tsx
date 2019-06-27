import * as React from 'react';

const styles = require('./style.less');

const Page= ({ children, loading=false, inner= true }) => {

    return (
        <div className={ styles.bg } key="loginLayout">
            {loading? '' : ''}
            {children}
        </div>
    );
};

export default Page;
