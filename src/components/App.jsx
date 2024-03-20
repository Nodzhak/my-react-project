import React, { useEffect } from 'react';
import axios from 'axios';


const App = () => {
  const [articles, setArticles] = useState([])
useEffect(()=>{
async function fetchArticles(){
const response = await axios.get(
  "<https://hn.algolia.com/api/v1/search?query=react>"
)
setArticles(response.data.hits)
}

fetchArticles();
},[])

  

  return (
    <div>
      <h1>Latest articles</h1>
    </div>
  );
};

export default App;