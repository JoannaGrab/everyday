import Input from './Input';
import Button from './Button';

function Component({ inputs, onClick }) {
    const barStyle = {
        display: 'flex',
        flexDirection: 'row'
    };

    return (
        <div style={barStyle}>
            {inputs.map(i =>
                <Input title={i.title} value={i.value} onChange={i.function} />
            )}
            <Button onClick={onClick} />
        </div>
    )
}

export default Component;
