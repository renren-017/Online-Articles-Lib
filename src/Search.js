import React, {useState} from 'react'

const Search = ({searchText}) => {
    const [text, setText] = useState('')

    const submitHndlr = (event) => {
        event.preventDefault()
        searchText(text)
    }
    return (
        <div>
            <form onSubmit={submitHndlr}>
                <input 
                    type='text' 
                    placeholder='e.g. politics' 
                    className='py-2 px-2 mt-5' 
                    onChange={(event) => setText(event.target.value)}/>
                <button 
                    type='submit' 
                    className='bg-white font-bold py-2 px-2'
                > Search </button>
            </form>
        </div>
    )
}

export default Search
