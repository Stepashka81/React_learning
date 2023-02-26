import React from 'react';
import ArticleList from './ArticleList'
import myArray from '../My_arrays'// импортирую массив и называю его articles



function App(){
  return(
<div>
<h1>My Articles</h1>
<ArticleList articlesFromArray={myArray}/> {/*Передаю в пропсы компонента ArticleList мой массив */}


</div>

  )
}



export default App;
