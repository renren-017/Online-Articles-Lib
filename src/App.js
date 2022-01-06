import React, {useState, useEffect} from 'react'
import Search from './Search'


const App = () => {

  const [articles, setArticles] = useState([])
  const [term, setTerm] = useState('everything')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchArticles = async () => {
      const res = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${term}&api-key=OxcFkIOim3cHY1YY0SxygD1LullYrkm5`)
      const articles = await res.json()
      console.log(articles.response.docs)
      setArticles(articles.response.docs)
    }

    fetchArticles()
  }, [])

  return (
    <>

      <div className='showcase'>
        <div className='overlay px-5'>
          <h1 className='text-4xl font-bold text-white'>Viewing articles about {term}</h1>
          <Search/>
        </div>
      </div>
      <section className='grid grid-cols-1 gap-10 px-5 pt-10 pb-20'>
        {articles.map((article) => {
          const {abstract, 
            headline:{main}, 
            byline:{original}, 
            lead_paragraph, 
            news_desk, 
            section_name, 
            web_url, 
            _id, 
            word_count
          } = article
          
          return (
            <article key={_id} className='bg-white py-10 px-5 lg:w-9/12 lg:mx-auto'>
              <h2 className='font-bold text-2xl mb-2 lg:text-4xl'>{main}</h2>
              <h4>{abstract}</h4>
              <p>{lead_paragraph}</p>
              <ul className='my-4'>
                <li>{original}</li>
                <li>
                  <span className='font-bold'>News Desk: </span> {news_desk}
                </li>
                <li>
                  <span className='font-bold'>Section Name: </span> {section_name}
                </li>
                <li>
                  <span className='font-bold'>Word Count: </span> {word_count}
                </li>
              </ul>
              <a href={web_url} target="_blank" className='underline'>Web Resource</a>
            </article>
        )
        })}
      </section>
    </>
  );
}

export default App;
