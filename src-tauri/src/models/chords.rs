use serde::Deserialize;

#[derive(Debug, Deserialize)]
pub struct ChordResponse {
    pub chords: Vec<String>,
}
