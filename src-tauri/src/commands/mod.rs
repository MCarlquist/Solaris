mod ai;

use ai::fetch_chords;

#[tauri::command]
pub async fn get_chords() -> Result<Vec<String>, String> {
    let response = fetch_chords().await?;
    Ok(response.chords)
}
