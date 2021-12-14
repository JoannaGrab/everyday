function Component({ onClick }) {
    const buttonStyle = {
        marginTop: '50px',
        height: '10%'
    };

    return (
        <button style={buttonStyle} onClick={onClick}>+</button>
    )
}

export default Component;
