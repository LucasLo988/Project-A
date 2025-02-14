import { SongArtist } from "./SongArtist";
import { SongLyric } from "./SongLyric";
import Message  from "./Message"

export function SongDetails({ search, lyric, bio }) {
    if(!bio && !lyric) return

    return (
        <>
            <h2>Detalles</h2>
            {lyric.error || lyric.err || lyric.name === "AbortError" 
                ? <Message 
                    msg={`No existe la canción '${search.song}'`} 
                    bgColor="#dc3545" /> 
                : <SongLyric />
            }
                
            {bio.artists 
                ? <SongArtist /> 
                : <Message 
                    msg={`No existe el artista '${search.artist}'`} 
                    bgColor="#dc3545" />  
            }            
        </>
    )
}