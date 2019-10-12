import React, { useState } from 'react';

// Components
import Search from '../../components/Search';

const Header: React.FC = () => {
    return(
        <div>
            <h1>Good Reads</h1>
            <div>
                <Search />
            </div>
        </div>
    )
}
export default Header;