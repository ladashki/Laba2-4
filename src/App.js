import React from 'react';
import Info from "./components/info";
import QuoteShow from "./components/quote";
//import './App.css';



class App extends React.Component {
    
    state={ quote: undefined }
    
  
    
    
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

