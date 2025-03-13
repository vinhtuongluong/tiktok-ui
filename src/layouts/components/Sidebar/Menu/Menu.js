import PropTypes from 'prop-types';

function Menu({ children }) {
    return (
        <nav>
            <ul>{children}</ul>
        </nav>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Menu;
