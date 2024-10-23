import React,{useState} from 'react';
import './layout.css';
import img from '../assets/images/logo.png';
import button from '../assets/images/on-off.png';
import Output from './output';

const Layout = (props) => {
    let [input,setInput]=useState('0')
    let [result,setResult]=useState('')
    const handleClick = (event) => {
        const value=event.target.value;
        if(value ==='='){
            if(input!==''){
               let res=''
               try{
                 res=eval(input)
               }catch(err){
                 setResult('Math Error')
               }
               if(res===undefined){
                 setResult('Math Error')
               }
               else{
                 setResult(input+'=')
                 setInput(res)
               }
            }
        }
        else if(value ==='C'){
            setInput('0')
            setResult('')
        }
        else if(value ==='DEL'){
            let str=input
            str=str.substr(0,str.length-1)
            setInput(str)

        }
        else if(input=== '0'){
            setInput(value)
        }
        else{
            setInput(input+=value)
        }
    };

    return (
        <div className='frame'>
            <div className='calculator'>
                <br></br>
                <Output user={input} answer={result}/>
                <img src={img} width='100px' height='100' style={{display:'block',marginLeft:'auto',marginRight:'auto',marginTop:'10px',marginBottom:'-12px'}}/>
                <div className='keys'>
                    <input type='button' value={'C'} className='button clear' onClick={handleClick}></input>
                    <input type='button' value={'DEL'} className='button clear' onClick={handleClick}></input>
                    <input type='button' value={'%'} className='button operator' onClick={handleClick}></input>
                    <input type='button' value={'/'} className='button operator' onClick={handleClick}></input>

                    <input type='button' value={'7'} className='button' onClick={handleClick}></input>
                    <input type='button' value={'8'} className='button' onClick={handleClick}></input>
                    <input type='button' value={'9'} className='button' onClick={handleClick}></input>
                    <input type='button' value={'*'} className='button operator' onClick={handleClick}></input>

                    <input type='button' value={'4'} className='button' onClick={handleClick}></input>
                    <input type='button' value={'5'} className='button' onClick={handleClick}></input>
                    <input type='button' value={'6'} className='button' onClick={handleClick}></input>
                    <input type='button' value={'-'} className='button operator' onClick={handleClick}></input>

                    <input type='button' value={'1'} className='button' onClick={handleClick}></input>
                    <input type='button' value={'2'} className='button' onClick={handleClick}></input>
                    <input type='button' value={'3'} className='button' onClick={handleClick}></input>
                    <input type='button' value={'+'} className='button operator' onClick={handleClick}></input>

                    <input type='button' value={'0'} className='button clear' onClick={handleClick}></input>
                    <input type='button' value={'.'} className='button clear' onClick={handleClick}></input>
                    <input type='button' value={'='} className='button operator' onClick={handleClick}></input>
                    <input type='button' className='button operator image-button' style={{ backgroundImage: `url(${button})` }}></input>
                </div>
            </div>
        </div>
    );
};

export default Layout;
