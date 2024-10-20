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
  return (
    <li>
      <input 
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