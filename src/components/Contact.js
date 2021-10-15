import React from 'react'

export default function contact(props) {

    const contactClick = () =>{
        props.showAlert("Your Response Has Been Submitted" , "success")
    }
    return (
        <div>
                 <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label"> Name</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Name" />
            </div>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="@gmail.com" />
            </div>
            <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div className="container">

                <button className="btn btn-primary mx-1 "  onClick = {contactClick} >Contact Us</button>
                {/*<a rel="stylesheet" href="mailto: shreyashingale282@gmail.com"</a>>*/} 
            </div>
        </div>
    )
}
