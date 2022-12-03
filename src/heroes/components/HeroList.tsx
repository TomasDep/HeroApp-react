import { getHeroesByPublisher } from "../helpers";
import { IHeroes } from "../interfaces/heroes.interface";

export const HeroList = ({ publisher }: { publisher: string }) => {
  const heroes = getHeroesByPublisher(publisher);
  return (
    <ul>
      {heroes.map((hero: IHeroes) => {
        return <li key={hero?.id}>{hero?.superhero}</li>;
      })}
    </ul>
  );
};
