import { useEffect, useState } from "react";
import { LayoutWrapper } from "./AppStyles";
import axios from "axios";
import CardPartido from "./components/CardPartido/CardPartido";
import Select from "./components/Select/Select";
import { CiTrophy } from "react-icons/ci";

function App() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(() => {
    return localStorage.getItem('categoriaSeleccionada') || "";
  });
  const [partidos, setPartidos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [equipos, setEquipos] = useState([]);

  const updateLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  };

  const getPartidos = async () => {
    try {
      const response = await axios.get('https://api-coparelampago.vercel.app/user/get-partidos');
      const todosLosPartidos = response.data;

      if (categoriaSeleccionada) {
        const partidosFiltrados = todosLosPartidos.filter(partido => partido.id_categoria.toString() === categoriaSeleccionada);
        if (partidosFiltrados.length > 0) {
          const maxJornada = Math.max(...partidosFiltrados.map(partido => partido.jornada));
          const partidosUltimaJornada = partidosFiltrados.filter(partido => partido.jornada === maxJornada);

          setPartidos(partidosUltimaJornada);
          updateLocalStorage('partidos', partidosUltimaJornada);
        } else {
          setPartidos([]);
        }
      } else {
        setPartidos([]);
      }
    } catch (error) {
      console.error('Error fetching partidos:', error);
    }
  };

  const getCategorias = async () => {
    try {
      const response = await axios.get('https://api-coparelampago.vercel.app/user/get-categorias');
      const categorias = response.data;
      setCategorias(categorias);
      updateLocalStorage('categorias', categorias);

      if (categorias.length > 0 && !categoriaSeleccionada) {
        setCategoriaSeleccionada(categorias[0].id_categoria.toString());
      }
    } catch (error) {
      console.error('Error fetching categorias:', error);
    }
  };

  const getEquipos = async () => {
    try {
      const response = await axios.get('https://api-coparelampago.vercel.app/user/get-equipos');
      const equipos = response.data;

      setEquipos(equipos);
      updateLocalStorage('equipos', equipos);
    } catch (error) {
      console.error('Error fetching equipos:', error);
    }
  };

  useEffect(() => {
    const loadData = async () => {
      await Promise.all([getCategorias(), getEquipos()]);
      await getPartidos();
    };

    loadData();
  }, [categoriaSeleccionada]);

  useEffect(() => {
    localStorage.setItem('categoriaSeleccionada', categoriaSeleccionada);
    getPartidos();
  }, [categoriaSeleccionada]);

  const handleCategoriaChange = (e) => {
    setCategoriaSeleccionada(e.target.value);
  };
  
  return (
    <LayoutWrapper>
      <img src="https://coparelampago.com/uploads/CR/logoCopaRelampago.png" className="logo" alt="Logo Copa Relámpago"/>
      <Select onChange={handleCategoriaChange} value={categoriaSeleccionada} icon={<CiTrophy className="icon-select"/>}>
        <option value="" disabled>Selecciona una categoría</option>
        {categorias.map(categoria => (
          <option key={categoria.id_categoria} value={categoria.id_categoria.toString()}>
            {categoria.nombre}
          </option>
        ))}
      </Select>

      {partidos.length > 0 ? (
        partidos.map((partido) => (
          <CardPartido key={partido.id_partido} partido={partido} />
        ))
      ) : (
        <p>No hay partidos disponibles para la categoría seleccionada.</p>
      )}
    </LayoutWrapper>
  );
}

export default App;
