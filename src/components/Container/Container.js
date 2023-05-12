

import './Container.css'
function Container(props) {
    return (
        <div className="container-todo">
            {props.children}
        </div>
    );
}

export { Container };