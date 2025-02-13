import { SongArtist } from "./SongArtist";
import { SongLyric } from "./SongLyric";

export function SongDetails({ search, lyric, bio }) {
    return (
        <>
            <h2>Detalles</h2>
            <SongArtist />
            <SongLyric />
        </>
    )
}