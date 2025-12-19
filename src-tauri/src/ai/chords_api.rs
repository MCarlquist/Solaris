use crate::models::chords::ChordResponse;
use reqwest::Client;

pub async fn fetch_chords() -> Result<ChordResponse, String> {
    let client = Client::new();
    let res = client
        .get("https://chords.alday.dev/chords")
        .send()?
        .json()?;

    println!("{:?}", res);

    Ok(res)
}
