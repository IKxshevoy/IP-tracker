export async function getAddress(ip) {
    const response = await fetch(`https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_VQVtw07sPePNjslO1gFY1JjP1NNYy&ipAddress=${ip}`);
    
    return await response.json();
}