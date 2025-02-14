import { useEffect, useState } from "react"
import { SongForm } from "./SongForm"
import { SongDetails } from "./SongDetails"
import Loader from "./Loader"
import { helpHttp } from "../helpers/helpHttp"

export function SongSearch() {
    const [search, setSearch] = useState(null)
    const [bio, setBio] = useState(null)
    const [lyric, setLyric] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (search === null) return

        const fetchData = async () => {
            const { artist, song } = search;

            let artistUrl = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist}`
            let songUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`

            setLoading(true)

            const [ artistRes, songRes ] = await Promise.all([
                helpHttp().get(artistUrl),
                helpHttp().get(songUrl),
            ])   

            console.log(artistRes, songRes);

            setBio(artistRes)
            setLyric(songRes)
            setLoading(false)
        }
        fetchData();
    }, [search])
    
    const handleSearch = data => {
        console.log(data);
        setSearch(data)
    }

    return (
        <>
            <h1>Buscador de Canciones</h1>
            {loading && <Loader />}
            <SongForm handleSearch={handleSearch} />
            {search && !loading && <SongDetails search={search} lyric={lyric} bio={bio} />}
        </>
    )
}