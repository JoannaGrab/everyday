function Component({ marginTop, height, onClick, label }) {
    return (
        <button
            style={{
                marginTop: marginTop,
                height: height
            }}
            onClick={onClick}
        >
            {label}
        </button>
    )
}

export default Component;
