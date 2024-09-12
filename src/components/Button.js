
export default function Button({setOnHidden, onHidden}) {
  return(
    <button 
      className="icon"
      onClick={() => setOnHidden(!onHidden)}
      >{onHidden ? '+': '-'}
    </button>
  )
}