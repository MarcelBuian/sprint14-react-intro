
function formatDate(date) {
    return new Intl.DateTimeFormat(
        'en-US',
        { weekday: 'long' }
    ).format(date);
}

export default function TodoList() {
    const today = new Date();
    const yourNameValue = "Enter your name: ";

    return (
        <div>
            <h1 style={{
                color: "red",
                cursor: "pointer",
            }}>To Do List for {formatDate(today)}</h1>
            <img
                src="https://i.imgur.com/yXOvdOSs.jpg"
                alt="Hedy Lamarr"
                className="photo"
            />
            <label htmlFor="name">{yourNameValue}</label>
            <ul>
                <li>Invent new traffic lights</li>
                <li>Rehearse a movie scene</li>
                <li>Improve the spectrum technology</li>
            </ul>
        </div>
    );
}