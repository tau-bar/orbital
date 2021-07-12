import React, { createContext, useState } from 'react';

export const HamburgerContext = createContext({ active: false });

const HamburgerProvider = (props) => {
    const [active, setActive] = useState(false);

    return (
        <HamburgerContext.Provider value = {[active, setActive]}>
            {props.children}
        </HamburgerContext.Provider>
    )
}

export default HamburgerProvider;
