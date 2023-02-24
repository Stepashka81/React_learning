import React from 'react';
import Article from './Article'
import articles from '../My_arrays'// импортирую массив и называю его articles


function App(){
  return(
<div>
<h1>My Articles</h1>
<Article article={articles[0]} foo="bar" flag={true}/> 
{/*Присваиваю пропсу компоненты Article значение елемента [0] импортируемого массива*/ }

</div>

  )
}



export default App;
