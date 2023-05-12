import './Picture.css'

function Picture(props) {
    return (
        <div className='profile-ufa'>
            <img className="s-icon" src={props.icon} />
        </div>

    );

}

export { Picture };