use serde::Deserialize;

#[derive(Debug, Deserialize)]
pub struct ChordResponse {
    pub chords: Vec<String>,
}

#[derive(Debug, Deserialize)]
pub struct GenreResponse {
    pub genres: Vec<String>,
}
