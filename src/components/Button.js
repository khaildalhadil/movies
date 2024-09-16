const {useState} = require('react');

export default function Button({setOnHidden, onHidden}) {

  const [onHidden, setOnHidden] = useState(false);

  return(
    <button 
      className="icon"
      onClick={() => setOnHidden(!onHidden)}
      >{onHidden ? '+': '-'}
    </button>
  )
}