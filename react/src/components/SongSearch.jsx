import { useState } from "react"
import { SongForm } from "./SongForm"
import { SongDetails } from "./SongDetails"
import Loader from "./Loader"

export function SongSearch() {
    const [search, setSearch] = useState(null)
    const [lyric, setLyric] = useState(null)
    const [bio, setBio] = useState(null)
    const [loading, setloading] = useState(false)
    
    const handleSearch = data => {
        console.log(data);
        setSearch(data)
    }

    return (
        <>
            <h1>Buscador de Canciones</h1>
            {loading && <Loader />}
            <SongForm handleSearch={handleSearch} />
            <SongDetails search={search} lyric={lyric} bio={bio} />
        </>
    )
}