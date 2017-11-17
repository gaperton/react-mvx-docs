import React, { define } from 'react-mvx'
import ReactDOM from 'react-dom'

@define class Application extends React.Component {
    static state = {
        count : 0
    };

    render(){
        const { state } = this;
        return (
            <tr>
                { state.count }
                <button onClick={ () => state.count++ }>
                    Increment
                </button>                
            </tr>
        );
    }
}

ReactDOM.render( <Application/>, document.getElementById( 'react-application' ) );