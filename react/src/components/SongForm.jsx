import { useState } from "react"

const initialForm = {
    artist: "",
    song: ""
}

export function SongForm({ handleSearch }) {
    const [form, setForm] = useState(initialForm)

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        if (!form.artist || !form.song) {
            alert("Completa los Datos")
            return;
        } 

        handleSearch(form)
        setForm(initialForm)
    }

    return (
        <>
            <h2>Formulario</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="artist" placeholder="Nombre del Artista" onChange={handleChange} value={form.artist}/>
                <input type="text" name="song" placeholder="Nombre de la Canción" onChange={handleChange} value={form.song}/>

                <input type="submit" value="Enviar" />
            </form>
        </>
    )
}