import { useMemo } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";

import { getHeroById } from "../helpers";

export const HeroPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const hero = useMemo(() => getHeroById(id ? id : ""), [id]);
  const onNavigateBack = () => {
    navigate(-1);
  };
  if (!hero) {
    return <Navigate to="/marvel" />;
  }
  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={`/assets/imgs/${id}.jpg`}
          alt={hero?.superhero}
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>
      <div className="col-8">
        <h3>{hero?.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <strong>Alter ego:</strong>
            <span>{hero?.alter_ego}</span>
          </li>
          <li className="list-group-item">
            <strong>Publisher:</strong>
            <span>{hero?.publisher}</span>
          </li>
          <li className="list-group-item">
            <strong>First appearance:</strong>
            <span>{hero?.first_appearance}</span>
          </li>
        </ul>
        <h5 className="mt-3">Characters</h5>
        <p>{hero?.characters}</p>
        <button className="btn btn-outline-primary" onClick={onNavigateBack}>
          Regresar
        </button>
      </div>
    </div>
  );
};
