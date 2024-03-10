import React from 'react';
import MonComposant from './List';
import { useLocation } from 'react-router-dom';

const Apropos = () => {
    const { state } = useLocation() //
    const { actions , auteur } = state
    console.log('state----->',state)
    return (
        <div>
            {auteur}
            <MonComposant actions={actions} />
        </div>
    );
};

export default Apropos;