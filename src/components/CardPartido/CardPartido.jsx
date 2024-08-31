import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CardPartidoTitles, CardPartidoWrapper, CardPartidoTeams, CardPartidoTeam, CardPartidoInfo } from './CardPartidoStyles';

const CardPartido = ({ partido }) => {
    const [categorias, setCategorias] = useState(() => {
        const categoriasLocal = localStorage.getItem('categorias');
        return categoriasLocal ? JSON.parse(categoriasLocal) : [];
    });

    const [equipos, setEquipos] = useState(() => {
        const equiposLocal = localStorage.getItem('equipos');
        return equiposLocal ? JSON.parse(equiposLocal) : [];
    });
    
    const getEquipos = async () => {
        try {
            const response = await axios.get('https://api-coparelampago.vercel.app/user/get-equipos');
            setEquipos(response.data);
        } catch (error) {
            console.error('Error fetching equipos:', error);
        }
    };

    useEffect(() => {
        getEquipos();
    }, []);

    const formatFecha = (fecha) => {
        const date = new Date(fecha);
        return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;
    };

    const formatHora = (hora) => {
        // Suponemos que hora es una cadena en formato HH:mm:ss
        try {
            const [hours, minutes] = hora.split(':');
            return `${hours}:${minutes}`;
        } catch (error) {
            console.error('Error formatting hora:', error);
            return 'Hora no válida';
        }
    };

    const equipoLocal = equipos.find(equipo => equipo.id_equipo === partido.id_equipoLocal);
    const equipoVisita = equipos.find(equipo => equipo.id_equipo === partido.id_equipoVisita);
    const categoria = categorias.find(categoria => categoria.id_categoria === partido.id_categoria);

    return (
        <CardPartidoWrapper>
            <CardPartidoTitles>
                <h3>{categoria ? categoria.nombre : ''}</h3>
                <p>Fecha {partido.jornada} - {partido.cancha}</p>
            </CardPartidoTitles>
            <CardPartidoTeams>
                <CardPartidoTeam>
                    <img src={equipoLocal?.img ? `https://www.coparelampago.com/${equipoLocal.img}` : 'https://www.coparelampago.com/uploads/Equipos/team-default.png'} alt={equipoLocal ? equipoLocal.nombre : 'Equipo Local'} />
                    <h4>{equipoLocal ? equipoLocal.nombre : 'Equipo Local'}</h4>
                </CardPartidoTeam>
                <CardPartidoInfo>
                    {
                        partido.estado === 'S' ? (
                            <>
                                <h5 style={{color: 'var(--red)'}}>POSTERGADO</h5>
                            </>
                        ) : (
                            <>
                                <h5>{formatHora(partido.hora)}</h5>
                                <p>{partido.dia_nombre} {partido.dia_numero}/0{partido.mes}</p>
                            </>
                        )
                    }
                </CardPartidoInfo>
                <CardPartidoTeam>
                    <img src={equipoVisita?.img ? `https://www.coparelampago.com/${equipoVisita.img}` : 'https://www.coparelampago.com/uploads/Equipos/team-default.png'} alt={equipoVisita ? equipoVisita.nombre : 'Equipo Visita'} />
                    <h4>{equipoVisita ? equipoVisita.nombre : 'Equipo Visita'}</h4>
                </CardPartidoTeam>
            </CardPartidoTeams>
        </CardPartidoWrapper>
    );
};

export default CardPartido;
