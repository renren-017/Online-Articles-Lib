import React, {useState} from 'react'

const Search = () => {
    const [text, setText] = useState('')
    return (
        <div>
            <form>
                <input type='text' placeholder='e.g. politics' className='py-2 px-2'/>
                <button type='submit' className='bg-white font-bold py-2 px-2'>Search</button>
            </form>
        </div>
    )
}

export default Search
