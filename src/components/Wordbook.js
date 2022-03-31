import { Link, Route, Switch } from 'react-router-dom';
import { FaCheck, FaRegEdit ,FaTimes } from "react-icons/fa";
import { useState } from 'react';
import { connect } from 'react-redux';



function Wordbook(props) {
    
    let [color,setColor] = useState(true) ;

    let colorHandler = () => {
        if( color ) {
            setColor(false)
        } else {
            setColor(true)
        }
    }
    


    return (
        <div className='col-md-3 card-box' style ={{ backgroundColor : color ? "white" : "green" }}>
            <div className="icon-box">
                <FaCheck className="icon"  onClick={() => { colorHandler() } }/>
                <Link to="/wordcorrect"><FaRegEdit className="icon" /></Link>
                <FaTimes className="icon" />
            </div>
            <div className='word-box'>
                <div className='word'>
                    { props.state[props.i].word }
                </div>
                <div className='pronunciation'>
                    { props.state[props.i].pronunciation }
                </div>
                <div className='content'>
                    { props.state[props.i].content }
                </div>
                <div className='example'>
                    { props.state[props.i].example }
                </div>
                <div className='interpret'>
                    { props.state[props.i].interpret }
                </div>
            </div>
        </div>



    );
}
function stateprops(state){
    return{
      state : state
    }
  }
  
  export default connect(stateprops)(Wordbook);

// export default Wordbook;