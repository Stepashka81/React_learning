import React from "react"
import Article from "./Article"

export default function ArticleList({articlesFromArray}){

     const articleElements=articlesFromArray.map(article=>
         <li key={article.id}> <Article article={article}/></li> )
return (
    <ul>
        {articleElements}
    </ul>
)

}

