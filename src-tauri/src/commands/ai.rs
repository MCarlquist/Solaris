use crate::models::chords::ChordResponse;
use reqwest::Client;

pub async fn fetch_chords() -> Result<ChordResponse, String> {
    let client = Client::new();
    let res = client
        .get("https://chords.alday.dev/")
        .send()
        .await
        .map_err(|e| e.to_string())?;

    res.json().await.map_err(|e| e.to_string())
}
