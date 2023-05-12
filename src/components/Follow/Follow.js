


import './Follow.css'
function Follow(props) {
    return (
        // <ul style="list-style: none; display: flex;">
        //     <li style="margin-right: 20px;">
        //         
        //     </li>
        //     <li>
        //         <button style="padding: 10px; background-color: #007bff; color: #fff; border: none; border-radius: 5px;">
        //             <i class="fas fa-star"></i> Icon Button
        //         </button>
        //     </li>
        // </ul>
        <div className="follow-container">

            <button className='ufa'>Follow</button>
            <img className="s-icon" src={props.icon} alt="follow icon" />
        </div>


    );
}
export { Follow };