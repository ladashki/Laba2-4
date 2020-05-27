import React from 'react';
import Info from "./components/info";
import QuoteShow from "./components/quote";
//import './App.css';
const port = process.env.PORT || 3000;



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

