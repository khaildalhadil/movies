import {useEffect, useRef, useState} from 'react';

export default function Header({children, setQuery, query}) {
  return(
    <nav>
      <ul>
        {children}
        <Input setQuery={setQuery} query={query}/>    
        <Rate/>
      </ul>
    </nav>
  )
}

function Input({setQuery, query}) {

  const inputRef = useRef(null);
  const [focus, setFocus] = useState(false);

  
  useEffect(()=> {

    function callback(e) {
      if (e.key === 'Enter') {
        setQuery('');
        setFocus(!focus);
      }
    }
    document.addEventListener('keydown', callback);

    console.log(inputRef.current);
    inputRef.current.focus();

    return function() {
      document.removeEventListener('keydown', callback)
    }
  }, [focus]);

  return (
    <li>
      <input
        ref={inputRef}
        value={query}
        onChange={(e)=> setQuery(e.target.value)}
        type="text" 
        placeholder="serch for movie" />
    </li>
  )
}

function Rate() {
  return(
    <li>
      <h1>🍟 تقيمم الافلام 101 🎬</h1>
    </li>
  )
} 