//this component handles the app template used on every page.
import React, {PropTypes} from 'react';

class App extends React.Component {
    render () {
        return (
            <div className="container-fluid">
                <p>Header here...</p>
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};
extends default App;