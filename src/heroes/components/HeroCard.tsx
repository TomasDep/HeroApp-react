import { Link } from "react-router-dom";

import { IHeroes } from "../interfaces";

interface ICharacterByHero {
  alter_ego: string;
  characters: string;
}

const CharacterByHero = ({ alter_ego, characters }: ICharacterByHero) => {
  if (alter_ego === characters) return <></>;
  return <p>{characters}</p>;
};

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}: IHeroes) => {
  const heroImageUrl = `/assets/imgs/${id}.jpg`;
  //const charactersByHero = <p>{characters}</p>;
  return (
    <div className="col animate__animated animate__fadeIn">
      <article className="card text-white">
        <img src={heroImageUrl} alt={superhero} className="card-img" />
        <section className="card-img-overlay bg-gray-5">
          <h5 className="card-title">{superhero}</h5>
          <p className="card-text">{alter_ego}</p>
          {/* {alter_ego !== characters && charactersByHero} */}
          <CharacterByHero characters={characters} alter_ego={alter_ego} />
          <p className="card-text">
            <strong className="text-warning">{first_appearance}</strong>
          </p>
          <Link to={`/hero/${id}`}>Mas...</Link>
        </section>
      </article>
    </div>
  );
};
