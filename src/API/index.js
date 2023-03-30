const key = 'b6d68ece3515ef2975e60deb754af423';

export const fetchCoordinates = async(kota)=>{
    const data = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${kota}&appid=${key}`);
    return data.json().then(res=>{
        console.log(res[0].lat, res[0].lon)
    })
}