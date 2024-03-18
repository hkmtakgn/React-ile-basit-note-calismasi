import React, { useState } from 'react';

export default function Home({setTodo}) {
   

    function handleAddTodo() {
        let inputTextValue = document.getElementById("textAreaID").value
        setTodo(prevTodo => [inputTextValue, ...prevTodo])
        document.getElementById("textAreaID").value = ""
    }


    return (
        <>
        <div className="container">
            <div className="row justify-content-center align-items-center" style={{ height: "100vh" }}>
                <div className="col-md-6 text-center">
                    <h1 className="text-center mb-4">Write Your Notes!</h1>
                    <textarea className="form-control border-info" name="textArea" id="textAreaID" cols="50" rows="7"></textarea>
                    <button type="button" className='btn btn-info mt-3' onClick={handleAddTodo}>Kaydet</button>
                </div>
            </div>
        </div>
        </>
    );
}
