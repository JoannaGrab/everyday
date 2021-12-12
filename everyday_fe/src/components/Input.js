function Component({ title, value, onChange }) {
    return (
        <div>
            <p>{title}</p>
            <input type='text' value={value} onChange={onChange}></input>
        </div>
    )
}

export default Component;
