


export default function Headers() {
  return(
    <nav>
      <ul>
        <Search/>
        <Input/>    
        <Rate/>
      </ul>
    </nav>
  )
}

function Search() {
  return (
    <li>
      <p>نتائج البحث 3</p>
    </li>
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