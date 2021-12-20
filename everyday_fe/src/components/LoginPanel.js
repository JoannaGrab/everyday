function Component({ }) {
    const styles = {
        border: '1px solid black',
        width: '40%',
        margin: '50px',
        padding: '20px'
    }

    const onSubmit = () => {
        alert('Loged in to Everyday!');
    };

    return (
        <form style={styles}>
            <h1>Everyday</h1>
            <label for='username'>Username</label><br />
            <input type='email'
                id='username'>
            </input><br />
            <label for='password'>Password</label><br />
            <input type='password'
                id='password'>
            </input><br />
            <button type='submit' onClick={onSubmit}>Add</button>
        </form>
    )
}

export default Component;
