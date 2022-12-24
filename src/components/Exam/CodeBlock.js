import React from 'react';

import "./CodeBlock.scss";

const CodeBlock = (props)=>{

if(props.id === 1){
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

if(props.id === 2){
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

if(props.id === 3){
    return(
    <div className='codeBlock'>
        <span className='dec_var'>let</span> <span className='var'>a</span> = '3' <br/>
        <span className='var'>a</span> **= 2;<br/>
        <span className='var'>console</span>.<span className='func'>log</span>
          (<span className='var'>a</span>);
        </div>
        )
}

if(props.id === 4){
    return(<div></div>)
}

if(props.id === 5){
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

if(props.id === 6){
    return(
    <div className='codeBlock'>
        <span className='dec_var'>function</span> <span className='var'>myFunc</span>( ) {'{'} {'}'}<br/>
        <span className='var'>console</span>.<span className='func'>log</span>
          (<span className='dec_var'>typeof</span> <span className='var'>myFunc</span>);
    </div>
    )
}

if(props.id === 7){
    return(<div></div>)
}

if(props.id === 8){
    return(
    <div className='codeBlock'>
        <span className='var'>console</span>.<span className='func'>log</span>
          (3 &gt; 2 &gt; 1);
    </div>
    )
}

if(props.id === 9){
    return(<div></div>)
}

if(props.id === 10){
    return(
    <div className='codeBlock'>
        <span className='dec_var'>let</span> <span className='var'>a</span> = 4 + 5 <br/>
        <span className='var'>a</span> += 2;<br/>
        <span className='var'>console</span>.<span className='func'>log</span>
          (<span className='var'><span className='dec_var'>void</span> a</span>++);
        </div>
        )
}

if(props.id === 11){
    return(
    <div className='codeBlock'>
        <span className='dec_var'>function</span> <span className='var'>myFunc</span>( ) {'{'} <br/>
        <span className='dec_var'>&nbsp; return</span> 20 * '20';<br/>
         {'}'}<br/>
        <span className='var'>console</span>.<span className='func'>log</span>
          (<span className='dec_var'>typeof</span>  <span className='dec_var'>typeof
          </span> <span className='var'>myFunc</span>);
    </div>
    )
}

if(props.id === 12){
    return(
    <div className='codeBlock'>
        <span className='dec_var'>let</span> <span className='var'>a</span> = 5; <br/>
        <span className='dec_var'>const</span> <span className='var'>myFunc</span> = ( ) =&gt; {'{'} <br/>
        <span className='dec_var'>&nbsp; this</span>.<span className='var'>a</span> = 40;<br/>
         {'}'}<br/>
         <span className='var'>myFunc</span>( );<br/>
        <span className='var'>console</span>.<span className='func'>log</span>
          (<span className='dec_var'>this</span>.<span className='var'>a</span>);
    </div>
    )
}

if(props.id === 13){
    return(
    <div className='codeBlock'>
        <span className='var'>console</span>.<span className='func'>log</span>
          (<span className='var'>a</span>);<br/>
          <span className='var'>a</span> = 2; <br/>
          <span className='dec_var'>var</span> <span className='var'>a</span> = 6; <br/>
    </div>
    )
}

if(props.id === 14){
    return(
    <div className='codeBlock'>
        <span className='dec_var'>const</span> <span className='var'>a</span> = {'{ '}
        d: 7 {'}'};<br/>
        <span className='dec_var'>const</span> <span className='var'>b</span> = <span className='class'>
            Object</span>.<span className='func'>freeze</span>(<span className='var'>a</span>)<br/>
        <span className='var'>console</span>.<span className='func'>log</span>
          (<span className='var'>a</span> === <span className='var'>b</span>);
    </div>
    )
}

if(props.id === 15){
    return(
    <div className='codeBlock'>
        <span className='dec_var'>let</span> <span className='var'>p</span> = <span className='var'>
            Promise</span>.<span className='func'>resolve</span>('Ok');<br/>
        <span className='var'>p</span>.<span className='func'>then</span>( <span className='var'>r</span> =&gt; {'{'}<br/>
        &nbsp;<span className='var'>console</span>.<span className='func'>log</span>
          (<span className='var'>r</span>); <span className='dec_var'>throw</span> 'Bad';<br/>
          {'}'}).<span className='func'>catch</span>(<span className='var'>e</span>=&gt; {'{'}<br/>
          &nbsp;<span className='var'>console</span>.<span className='func'>log</span>
          (<span className='var'>e</span>); <span className='dec_var'>throw</span> 'Ooops';<br/>
          {'}'}).<span className='func'>finally</span>(<span className='var'>m</span>=&gt; {'{'}<br/>
          &nbsp;<span className='var'>console</span>.<span className='func'>log</span>
          ('End');<br/>
          {'}'});
    </div>
    )
}

if(props.id === 16){
    return(
    <div className='codeBlock'>
        <span className='dec_var'>const</span> <span className='var'>toString</span> = <span className='class'>
        Object</span>.<span className='var'>prototype</span>.<span className='func'>toString</span>;<br/>
        <span className='dec_var'>const</span> <span className='var'>myFunc</span> = <span className='var'>
            toString</span>.<span className='func'>bind</span>(<span className='type'>null</span>);<br/>
        <span className='var'>console</span>.<span className='func'>log</span>
          (<span className='var'>myFunc</span>( ));
   </div>
    
    )
}

if(props.id === 17){
    return(
    <div className='codeBlock'>
        <span className='dec_var'>try</span> {'{ '}<br/>
        &nbsp;<span className='dec_var'>try</span> {'{ '}<br/>
        &nbsp;  &nbsp;<span className='dec_var'>throw</span> 'Ooops'<br/>
        &nbsp;{'}'}<br/>
        &nbsp;<span className='dec_var'>throw</span> 'Panic'<br/>
        {'}'}  <span className='dec_var'>catch</span>(<span className='var'>err</span>){'{ '}<br/>
          &nbsp;<span className='var'>console</span>.<span className='func'>log</span>
          (<span className='var'>err</span>);<br/>
          {'}'}
    </div>
    )
}

if(props.id === 18){
    return(
    <div className='codeBlock'>
        <span className='dec_var'>function</span> <span className='var'>myFunc</span>( ) {'{'} {'}'}<br/>
        <span className='dec_var'>const</span> <span className='var'>A</span> = <span className='dec_var'>
            new</span> <span className='var'>myFunc</span>( );
    </div>
    )
}

if(props.id === 19){
    return(
    <div className='codeBlock'>
        <span className='dec_var'>const</span> <span className='var'>n</span> = <span className='dec_var'>
            </span> <span className='func'>Number</span>();<br/>
        <span className='var'>console</span>.<span className='func'>log</span>
          (<span className='var'>n</span>);
   </div>
    )
}

if(props.id === 20){
    return(<div></div>)
}

if(props.id === 21){
    return(
    <div className='codeBlock'>
        <span className='dec_var'>let</span> <span className='var'>n</span> = <span className='dec_var'>
            </span>'25'. <span className='func'>toString</span>();<br/>
        <span className='var'>console</span>.<span className='func'>log</span>
          (<span className='var'>n</span>);
   </div>
    )
}

if(props.id === 22){
    return(
    <div className='codeBlock'>
<span className='class'>class</span> <span className='var'>Human</span> {'{'} {'}'}<br/>
<span className='class'>Human</span>.<span className='func'>firstName</span> = 'John';<br/>
<span className='dec_var'>const</span> <span className='var'>John</span> = <span className='dec_var'>new
</span> <span className='var'>Human</span>( );<br/>
<span className='var'>console</span>.<span className='func'>log</span>
          (<span className='var'>John</span>.<span className='func'>firstName</span>);
   </div>
    )
}



    return(
        <div>Likely error with id</div>
    )
}

export default CodeBlock;