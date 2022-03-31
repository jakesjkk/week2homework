import { Link, Route, Switch } from 'react-router-dom';

import { AiFillPlusCircle } from 'react-icons/ai'

import './Homepage.css';

import Wordbook from '../components/Wordbook';


import { useState } from 'react';
import { connect } from 'react-redux';



function Homepage(props) {

    // let [word,setWord ] = useState(['explain','go','make','understand','conquer'])
    // let [pronunciation,setPronunciation] = useState(word)
    // let [content,setContent] = useState(['설명하다','가다','만들다','이해하다','정복하다'])
    // let [example,setExample] = useState(['문장1','문장2','문장3','문장4','문장5'])
    // let [interpret,setInterpret] = useState(['해석1','해석2','해석3','해석4','해석5'])



    return(
    
         <>
          <div className='container'>
          <div className='row'>

            

                {/* {
                    word.map((a,i)=> {
                        return (
                               <Wordbook word={word} pronunciation={pronunciation} content={content} example={example} interpret={interpret} i={i} key={i}/>
                        )
                    })
                } */}

                {
                  props.state.map((a,i)=>{ 
                      return(
                        <Wordbook i={i}/>
                      )
                   })


                }
                
                {/* {props.state[0].word}  */}
                
        </div>
        </div>

          <div className='icon-right-bottom'>
            <Link to="/wordpost"><AiFillPlusCircle className='icon-plus' /></Link>
          </div> 
        </>   
);
}

function stateprops(state){
  return{
    state : state
  }
}

export default connect(stateprops)(Homepage);
// export default Homepage;

