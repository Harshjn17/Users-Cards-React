import "./Card.css";

function Card(props) {

    return (
        <div class="card">
            <img src={props.img} alt="Profile"/>

            <h2>{props.name}</h2>
            <span>{props.username}</span>

            <p>
                {props.jobRole}
            </p>

            <div class="buttons">
                <button class="message">
                    <i class="fa-regular fa-comment"></i>
                    Message
                </button>

                <button class="follow">
                    <i class="fa-solid fa-user-plus"></i>
                    Follow
                </button>
            </div>
        </div>
    )
}

export default Card