import React from "react";

class Article extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }

  render() {
    const { article } = this.props  //article это наш массив переданый из ArticleList
    console.log(this.props);
    const body = this.state.isOpen && <section>{article.text}</section>
    return (
      <div>
        <h2>
          {article.title}
          <button onClick={this.handleClick}>{this.state.isOpen ?'close':'open'}</button>

       </h2>
        {body}
        <h3>creation date:{(new Date(article.date)).toDateString()}</h3>
     
      </div>
    )
  }
  handleClick = () => {
    console.log('---','clicked')
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  
}


/*
function Article(props) {
  const { article } = props
  console.log(props);
  const body = <section>{article.text}</section>
  return (

    <div>
      <h2>
        {article.title}
      <button onClick={handleClick}>close</button>
      
      
      </h2>
      {body}
      <h3>creation date:{(new Date(article.date)).toDateString()}</h3>
    </div>
  );
}*/


export default Article 