import React from 'react';
import PropTypes from 'prop-types';

const Header = props =>{
    return(
        <header>
            <h1> THIS IS THE HEADER</h1>
            <p>This prop should be an int: {props.number}</p>
            <p>This prop should be a string: {props.string}</p>
        </header>
        )

}

Header.propTypes = {
    number: PropTypes.number.isRequired,
    string: PropTypes.string.isRequired
}


export default Header