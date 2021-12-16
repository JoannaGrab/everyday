function Component({ title, value, onChange }) {
    return (
        <div>
            <p>{title}</p>
            <input value={value} onChange={onChange}></input>
        </div>
    )
}

export default Component;
