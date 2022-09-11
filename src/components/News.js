import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {

    articles = [];

    constructor() {
        super();
        this.state = {
            articles: this.articles,
            loading: false
        }
    }

    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=bd2b180d16074e62aa518e51787267b2";
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles })
    }

    component

    render() {
        console.log("second");
        return (
            <>
                <div className="container">
                    <div className="row">
                        {this.state.articles.map((element) => {
                            return   <div className="col-md-4">
                                        <NewsItem title={element.title} description={element.description} imgUrl={element.urlToImage} url={element.url}/>
                                     </div>
                        })}
                    </div>
                </div>
            </>
        )
    }
}
