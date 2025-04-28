export async function fetchWeather(city) {
    const API_KEY = 'fd5b0d9582194230839173842252804'; 
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&lang=uk`);
    if (!response.ok) {
      throw new Error('Помилка мережі');
    }
    const data = await response.json();
    return data;
  }