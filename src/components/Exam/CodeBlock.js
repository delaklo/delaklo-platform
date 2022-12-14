import React from 'react';

import "./CodeBlock.scss";

const CodeBlock = (props)=>{

if(props.id == 1){
    return(
    <div className='codeBlock'>
        <span className='dec_var'>const</span> <span className='var'>a</span> = 'hello';<br/>
        <span className='dec_var'>const</span> <span className='var'>b</span> = <span className='var'>a
        </span>.<span className='func'>toUpperCase</span>( );<br/>
          <span className='var'>console</span>.<span className='func'>log</span>
          (<span className='var'>a</span>, <span className='var'>b</span>);
   </div>
    )
}

if(props.id == 2){
    return(
    <div className='codeBlock'>
        <span className='dec_var'>const</span> <span className='var'>a</span> = <span className='dec_var'>
            new</span> <span className='func'>Number</span>(20);<br/>
        <span className='dec_var'>const</span> <span className='var'>b</span> = <span className='dec_var'>
            new</span> <span className='func'>Number</span>(20);<br/>
        <span className='var'>console</span>.<span className='func'>log</span>
          (<span className='var'>a</span> === <span className='var'>b</span>);
   </div>
        

    )
}

if(props.id == 3){
    return(
    <div className='codeBlock'>
        <span className='dec_var'>let</span> <span className='var'>a</span> = '3' <br/>
        <span className='var'>a</span> **= 2;<br/>
        <span className='var'>console</span>.<span className='func'>log</span>
          (<span className='var'>a</span>);
        </div>
        )
}

if(props.id == 4){
    return(<div></div>)
}

if(props.id == 5){
    return(
    <div className='codeBlock'>
    <span className='dec_var'>let</span> <span className='var'>list</span> = [1, 6, 2] <br/>
    <span className='var'>console</span>.<span className='func'>log</span>
          (1 <span className='dec_var'>in</span> <span className='var'>list</span>);<br/>
          <span className='var'>console</span>.<span className='func'>log</span>
          (6 <span className='dec_var'>in</span> <span className='var'>list</span>);
    </div>
    )
}

if(props.id == 6){
    return(
    <div className='codeBlock'>
        <span className='dec_var'>function</span> <span className='var'>myFunc</span>( ) {'{'} {'}'}<br/>
        <span className='var'>console</span>.<span className='func'>log</span>
          (<span className='dec_var'>typeof</span> <span className='var'>myFunc</span>);
    </div>
    )
}

if(props.id == 7){
    return(<div></div>)
}


    return(
        <div>Error</div>
    )
}

export default CodeBlock;