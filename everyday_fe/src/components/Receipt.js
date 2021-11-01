import Tag from './Tag';

function Component(props) {
    return <div>
        <h1>{props.title}</h1>
        {props.tags.map(t => <Tag name={t}/>)}
    </div>
}

export default Component;