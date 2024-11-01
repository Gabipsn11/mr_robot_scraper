const fetch = require('node-fetch');

// Sua chave da API
const API_KEY = 'e06e9841'; // Insira sua chave da API OMDb aqui

async function fetchMrRobotData() {
    try {
        // Buscando informações da série na OMDb
        const response = await fetch(`http://www.omdbapi.com/?t=Mr+Robot&apikey=${API_KEY}`);
        const data = await response.json();

        if (data.Response === "True") {
            const title = data.Title;
            const synopsis = data.Plot;
            const platforms = ['Amazon Prime', 'Hulu']; // Exemplo de plataformas

            const episodes = await fetchEpisodes(); // Buscando episódios
            console.log('Título:', title);
            console.log('Sinopse:', synopsis);
            console.log('Episódios:', episodes);
            console.log('Plataformas:', platforms);

            return { title, synopsis, episodes, platforms };
        } else {
            console.error('Erro ao obter dados:', data.Error);
            return { title: 'Erro', synopsis: 'Erro ao coletar sinopse.', episodes: [], platforms: [] };
        }
    } catch (error) {
        console.error('Erro ao fazer requisição ao OMDb:', error);
        return { title: 'Erro', synopsis: 'Erro ao coletar sinopse.', episodes: [], platforms: [] };
    }
}

// Função para buscar episódios da série
async function fetchEpisodes() {
    try {
        const response = await fetch('https://api.tvmaze.com/singlesearch/shows?q=mr%20robot&embed=episodes');
        const data = await response.json();

        if (data._embedded && data._embedded.episodes) {
            return data._embedded.episodes.map(episode => `Temporada ${episode.season}, Episódio ${episode.number}: ${episode.name}`);
        } else {
            console.error('Episódios não encontrados');
            return [];
        }
    } catch (error) {
        console.error('Erro ao buscar episódios:', error);
        return [];
    }
}

module.exports = { fetchMrRobotData };
