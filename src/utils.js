import axios from 'axios'

export const getPartidos = async () => {
    try {
        const response = await axios.get('https://api-coparelampago.vercel.app/user/get-partidos');
        const partidos = response.data;
        console.log(partidos);
        // Aquí puedes hacer algo con los datos de los partidos, como guardarlos en una base de datos local.
    } catch (error) {
        console.error('Error fetching partidos:', error);
    }
};