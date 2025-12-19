mod ai;

use ai::fetch_chords;
use ai::fetch_genres;

#[tauri::command]
pub async fn get_chords() -> Result<Vec<String>, String> {
    let response = fetch_chords().await?;
    Ok(response.chords)
}

#[tauri::command]
pub async fn get_genres() -> Result<Vec<String>, String> {
    let response = fetch_genres().await?;
    Ok(response.genres)
}
