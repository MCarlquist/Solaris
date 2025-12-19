use crate::models::chords::{ChordResponse, GenreResponse};

pub async fn fetch_chords() -> Result<ChordResponse, String> {
    // Return all 12 major chords from music theory
    let major_chords = ChordResponse {
        chords: vec![
            "C".to_string(),
            "C#".to_string(),
            "D".to_string(),
            "D#".to_string(),
            "E".to_string(),
            "F".to_string(),
            "F#".to_string(),
            "G".to_string(),
            "G#".to_string(),
            "A".to_string(),
            "A#".to_string(),
            "B".to_string(),
        ],
    };

    Ok(major_chords)
}

// return music genres
pub async fn fetch_genres() -> Result<GenreResponse, String> {
    // Return all music genres from music theory
    let genres = GenreResponse {
        genres: vec![
            "Blues".to_string(),
            "Indie Folk".to_string(),
            "Country".to_string(),
            "Electronic".to_string(),
            "Folk".to_string(),
            "Hip Hop".to_string(),
            "Jazz".to_string(),
            "Pop".to_string(),
            "Rock".to_string(),
            "Singer Songwriter".to_string(),
            "Reggae".to_string(),
        ],
    };

    Ok(genres)
}
