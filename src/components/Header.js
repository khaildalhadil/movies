export default function Header({children}) {
  return(
    <nav>
      <ul>
        {children}
        <Input/>    
        <Rate/>
      </ul>
    </nav>
  )
}


function Input() {
  return (
    <li>
      <input type="text" placeholder="ابحث عن الافلام" />
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