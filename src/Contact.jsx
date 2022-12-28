import React, { useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {

    const [data, setData] = useState({
        name: '',
        email: '',
        msg: '',
    });

    const formSubmit = (e) => {
        e.preventDefault();
        alert('Form Submitted');
        alert(`You name ${data.name}`);
    };

    const inputEvent = (event) => {
        const { name, value } = event.target;
        setData((prevVal) => {
            return {
                ...prevVal,
                [name]: value,
            };
        });
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-10 my-5 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div className="form-group mb-3">
                                <label className="mb-2" htmlFor="exampleInputPassword1">Name</label>
                                <input name="name" value={data.name} onChange={inputEvent} type="text" className="form-control" id="exampleInputPassword1" placeholder="Name" />
                            </div>
                            <div className="form-group mb-3">
                                <label className="mb-2" htmlFor="exampleInputEmail1">Email address</label>
                                <input name="email" value={data.email} onChange={inputEvent} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            </div>
                            <div className="form-group mb-3">
                                <label className="mb-2" htmlFor="exampleInputPassword12">Message</label>
                                <textarea name="msg" value={data.msg} onChange={inputEvent} rows="5" className="form-control" id="exampleInputPassword12" placeholder="Message"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary my-3">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;