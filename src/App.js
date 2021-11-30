import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Meme1 from './Component/Meme1';
import './Component/Style.css';
class App extends React.Component {
    // Constructor
    constructor()
    {
        super()
        this.state = {
            items:[],
            isLoaded:false
        }
    }

    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes").then((res) => res.json()).then((json) => {
            this.setState({
                items:json.data.memes,
                isLoaded:true
            })
        });
    }

    render(){
        const {isLoaded, items} = this.state;
        if(isLoaded)
        {
            console.log(items);
            return (
                <div style={{ textAlign: "center" }}>
                    <h1>MEMES GENERATOR : BY PRIYA JHA<br />
                    <Link to="/meme"><button className='btn1'>CLICK HERE</button></Link></h1>
                    
                    
                    {
                        items.map((item)=>(
                          <Link to="/meme" className="" key={item.id}>
                            <img  key={item.id} src={item.url} alt={item.name} style={{height:200+'px',width:200+'px',margin:20+'px'}}/>
                          </Link>
                        ))
                    }
                </div>);
        }
        else
            return <h1>Loading...</h1>
    }
}
export default App;
	
