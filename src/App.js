import React from 'react';
import Info from "./components/info";
import QuoteShow from "./components/quote";
//import './App.css';



class App extends React.Component {
    
    state={ quote: undefined }
    
    
    
    
getting_quote = async(e) => {
    e.preventDefault();
    const api_url = await fetch("https://api.kanye.rest")
    const data = await api_url.json();
    console.log(data);
    
    
    this.setState({
       quote:  data.quote
    });
}    
    
    render(){
        return(
        <div> 
          <Info quoteMethod={this.getting_quote} />  
            <QuoteShow quote={this.state.quote} />  
        </div>

        );
    }
}

export default App;




   /*   const Url='https://kanye.rest/';    
           fetch(Url)
            .then(data=>{return data.json()})
            .then(res=>{console.log(res)}
         
         
         $('.btn').click(function(){ 
         $.getJSON(Url, function(result) {console.log(result) }); })
         
            )*/

/*
function App () {
 
	return (
    <div className="App">

	<h1>  HELLO  </h1>,

    </div>
  	);
  
}


*/

/*class App extends React.Component {
 render (){
     return (
           //<div> 
        <div> 
       $(document).ready(function(){
           const Url='https://kanye.rest/';
           $('.btn').click(function(){
               $.ajax({
                   url: Url,
                   type: "GET",
                   success: function(result){console.log(result)},
                   error: function(error){ console.log('Error ${error}')}
               })
           })
       })
      
   
        </div>
           // </div>
        );
        
        
    }
}*/