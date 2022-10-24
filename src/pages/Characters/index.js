import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import * as C from "./style";
import api from "../../services/api";

const List = () => {
  const navigate = useNavigate(),
    [films, setFilms] = useState([]);

  const getId = (id) => {
    navigate(`/details/${id}`);
  };

  useEffect(() => {
    api.get("").then((response) => {
      console.log(response.data.Search);
      setFilms(response.data.Search);
      console.log(films);
    });
  }, []);

  return (
    <C.Main>
      <C.Nav>
        <Button Text="Home" onClick={() => navigate("/home")} />
        <Button Text="Sair da conta" onClick={() => navigate("/signin")} />
      </C.Nav>
      <C.Container>
        <div>
          <img src={films[0]?.Poster} />
          <p>{films[0]?.Title}</p>
        </div>
        <div>
          <img src={films[1]?.Poster} />
          <p>{films[1]?.Title}</p>
        </div>

        <div>
          <img src={films[2]?.Poster} />
          <p>{films[2]?.Title}</p>
        </div>
        <div>
          <img src={films[3]?.Poster} />
          <p>{films[3]?.Title}</p>
        </div>
      </C.Container>
    </C.Main>
  );
};

export default List;
