import React, {useState, useEffect } from 'react'
import Footer from '../Footer/Footer';
import "./Advertisement.scss";
import { Button } from '../Button/Button.js';
import Axios  from "axios";
import {Link} from 'react-router-dom';

function Advertisement() {
    const [title, setTitle] = useState('');
    const [type, setType] = useState('');
    const [description, setDescrition] = useState('');
    const [selectedFile, setSelectedFile] = useState('');

    const fileupload = event => {
        setSelectedFile({
            selectedFile: event.target.files[0]
        })
    }



    return (
        <>
            <div className="newadvertisement-container">
            <div className="content">
                <header>Register A New Pet</header>
                <form action="/pets">
                <div className="newadvertisement-form">
                        <div className="form-group">
                            <label htmlFor="pettitle">Title</label>
                            <input type="text"
                             name="pettitle" 
                             value={title}
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
                        <div className="form-group">
                            <label htmlFor="fileupload">Pet Image</label>
                            <input 
                             type="file" 
                            onChange={fileupload}
                            name="file" />
                        </div>
                    </div>
                </form>
                <Link to="/pets" > Pet Save</Link>
                </div>
            </div> 
            <Footer/>
        </>
    )
}

export default Advertisement
