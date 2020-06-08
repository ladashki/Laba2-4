import React from 'react';
import Info from "./components/info";
import QuoteShow from "./components/quote";
//import './App.css';

class App extends React.Component {
    
   // state={ quote: undefined }

 constructor(){
    super();
    this.state = { quote: null };
}   
    
    
getQuote = async(e) => {
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
          <Info quoteMethod={this.getQuote} />          
           <QuoteShow quote={this.state.quote} />  
        </div>

        );
    }
}

export default App;


























