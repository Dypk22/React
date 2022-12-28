import s1 from '../src/s1.jpg';

const ServicesContent = (props) => {
    return (
        <>
            <div className="col-md-3 col-10 mx-auto">
                <div className="card">
                    <img src={s1} className="card-img-top" alt='this is a image' />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.content}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ServicesContent;