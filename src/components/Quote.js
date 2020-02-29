import React from 'react';
import '../style/Quote.css';


class Quote extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			contents: []
		};
	}

componentDidMount() {
	fetch("http://quotes.rest/qod.json?category=inspire")
	.then(res => res.json())
	.then(
		(result) => {
			this.setState({
				isLoaded: true,
				contents: result.contents
			});
		},

		(error) => {
			this.setState({
				isLoaded: true,
				error
			});
		}		
		)
}

    render(){
      const {error, isLoaded, contents} = this.state;
      if (error) {
      	return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
      	return <div>Loading...</div>;
      } else {
      	return(
      		<div className="quote-container">
          	<p>"{contents.quotes[0].quote}"  - {contents.quotes[0].author} </p>
          </div>
        
      		);

      	}
}
}

 


export default Quote;