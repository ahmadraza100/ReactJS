// var React = require('react');   //old js
import React from 'react';    //babel
// var ReactDOM = require('react-dom');  //old js
import ReactDOM from 'react-dom';  //  with babel
import "./index.css"

// ReactDOM.render("What to See" , "Where to Show" ,  "call back functions") ;
ReactDOM.render(
  <React.Fragment>
    <h1>Emi's News</h1>
    <p>Latest WorldWide Headlines</p>
  </React.Fragment>

  , document.getElementById("root"));


  //Api

  console.log("Hello Emi");

let xhr  = new XMLHttpRequest();

xhr.open('GET',`http://newsapi.org/v2/top-headlines?country=sa&apiKey=de6834e6dd724acf9df0e13dec9ffd26` , true);


xhr.onload = function () {
    if (this.status===200){
        let json = JSON.parse(xhr.responseText);
        let article = json.articles;
        console.log(json);
        
        article.forEach(function(element , index){

            let shorten = element.description.slice(0,90);
            let shorten2= element.title.slice(0,30);
           
           ReactDOM.render(
            <React.Fragment>
              <h2>{shorten2}</h2>
              <p>{shorten}</p>
    
              <a href={element.url} target="_blank">Read More</a>
            </React.Fragment>
          
            , document.getElementById(`category${index+1}`));
           
        });
    }
    else{
        console.log("show some error")
    }
};

xhr.send();



   