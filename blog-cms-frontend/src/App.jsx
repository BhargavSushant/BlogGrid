import { useEffect } from 'react'
import './App.css'
const apiUrl = import.meta.env.VITE_API_BASE_URL;


function App() {
  
  useEffect(() => {
    fetch(`${apiUrl}/api/posts?populate=*`)
      .then(res => res.json())
      .then(data => console.log(data));
  }, []);

  return (
    <>
     <h1>Blog CMS Frontend</h1>
    </>
  )
}

export default App
