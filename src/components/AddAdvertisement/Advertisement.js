import React, {useState, useEffect } from 'react'
import Footer from '../Footer/Footer';
import "./Advertisement";

function Advertisement() {
    const [title, setTitle] = useState('');
    const [type, setType] = useState('');
    const [description, setDescrition] = useState('');

    return (
        <>
            <div className="newadvertisement-container">
                <header>Register A New Pet</header>
                <form action="">
                <div className="newadvertisement-form">
                        <div className="form-group">
                            <label htmlFor="pettitle">Title</label>
                            <input type="text"
                             name="pettitle" 
                             value={title.value}
                             onChange={e => setTitle(e.target.value)}
                             placeholder="Title"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="pettype">Pet Type</label>
                            <input 
                            type="pettype" 
                            value={type}
                            onChange={e => setType(e.target.value)}
                            name="type" 
                            placeholder="Pet Type" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="typedescription">Description</label>
                            <input 
                            type="description" 
                            value={description}
                            onChange={e => setDescrition(e.target.value)}
                            name="description" 
                            placeholder="Pet Description" required/>
                        </div>
                    </div>
                </form>
            </div> 
            <Footer/>
        </>
    )
}

export default Advertisement
