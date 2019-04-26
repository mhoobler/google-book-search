import React from 'react';
import "./style.css";

function SavedBook(props) {

    console.log(props.author);
    var auth = ""
    for(var i=0; i< props.author.length; i++){
        console.log(props.author[i]);
        if(i<1){
            auth = props.author[i];
        } else {
            auth = auth + ", " + props.author[i];
        }
    }
    return (
        <div className="row">
            <div className="col-md-2"> 
                <img src={props.imgsrc} />
            </div>
            <div className="col-md-10">
                <div className="row">
                    <h3 className="float-left">{props.title}</h3>
                    <p>{props.author}</p>
                    <p>{props.syn}</p>
                </div>
            </div>
            <br />
        </div>
    )
}

export default SavedBook;