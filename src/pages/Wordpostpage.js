import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';


import './Wordpostpage.css';
import Wordbook from '../components/Wordbook';
import { connect } from 'react-redux';


function Wordpostpage(props) {
    // let history = useHistory();


   
    // let [입력값, 입력값변경] = useState('');
    // let [입력값2, 입력값2변경] = useState('');
    // let [입력값3, 입력값3변경] = useState('');
    // let [입력값4, 입력값4변경] = useState('');
    // let [입력값5, 입력값5변경] = useState('');

    // function copy1() {

    //     let wordcopy = [...word]
    //     wordcopy.unshift(입력값)
    //     setWord(wordcopy)
    // }

    // function copy2() {

    //     let pronunciationcopy = [...pronunciation]
    //     pronunciationcopy.unshift(입력값2)
    //     setPronunciation(pronunciationcopy)
    // }

    // function copy3() {

    //     let contentcopy = [...content]
    //     contentcopy.unshift(입력값3)
    //     setContent(contentcopy)
    // }

    // function copy4() {

    //     let examplecopy = [...example]
    //     examplecopy.unshift(입력값4)
    //     setExample(examplecopy)
    // }

    // function copy5() {

    //     let interpretcopy = [...interpret]
    //     interpretcopy.unshift(입력값5)
    //     setInterpret(interpretcopy)
    // }



    return(
    <>
             
        
            <div className="word-post-box">

                <div className='word-box'>
                    <div className='word'>
                        Word
                    </div>
                    <div className='pronunciation'>
                        pronunciation
                    </div>
                    <div className='content'>
                        content
                    </div>
                    <div className='example'>
                        example
                    </div>
                    <div className='interpret'>
                        interpret
                    </div>
                </div>

                {/* <div className="input-box">
                    <div className='input'>
                        <input  onChange={(e) => { 입력값변경(e.target.value) }}></input>
                    </div>
                    <div className='input'>
                        <input  onChange={(e) => { 입력값2변경(e.target.value) }}></input>
                    </div>

                    <div className='input'>
                        <input  onChange={(e) => { 입력값3변경(e.target.value) }}></input>
                    </div>
                    <div className='input'>
                        <input  onChange={(e) => { 입력값4변경(e.target.value) }}></input>
                    </div>

                    <div className='input'>
                        <input  onChange={(e) => { 입력값5변경(e.target.value) }}></input>
                    </div>
                </div> */}
                
                <button onClick = { () => {
                //    history.goBack('/')
                }}>등록하기 </button>
            </div>
            
                 {/* {
                    word.map((a,i)=> {
                        return (
                               <Wordbook word={word} pronunciation={pronunciation} content={content} example={example} interpret={interpret} i={i} key={i}/>
                        )
                    })
                } */}
                
               
            
    </>
);
}


function stateprops(state){
    return{
      state : state
    }
  }
  
  export default connect(stateprops)(Wordpostpage);