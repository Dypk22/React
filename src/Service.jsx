import { Link, NavLink } from "react-router-dom";
import ServicesContent from './ServicesContent';
import Sdata from './Sdata';
const Service = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-10 mt-3 mb-5 mx-auto border-bottom">
                        <h2 className="text-center">
                            Services
                        </h2>
                        <p className="text-center">What we offer</p>
                    </div>
                    <div className="col-md-10 mx-auto mb-5">
                        <div className="row gy-3">
                            {Sdata.map((val, id) => {
                                return <ServicesContent
                                    key={id} title={val.title} content={val.content} />
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Service;