import './Profile.css';

export default function Profile({ name = "?" }) {

    const altValue = "An animal";

    return (
        <div>
            <div>Animal name: {name}</div>
            <img
                className="animal-pic"
                src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
                alt={altValue}
            />
        </div>
    )
}
