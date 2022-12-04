import { useMemo } from "react";

import { getHeroesByPublisher } from "../helpers";
import { IHeroes } from "../interfaces";
import { HeroCard } from "./";

export const HeroList = ({ publisher }: { publisher: string }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
  return (
    <ul className="row row-cols-1 row-cols-md-3 g-3">
      {heroes.map((hero: IHeroes) => {
        return <HeroCard key={hero?.id} {...hero} />;
      })}
    </ul>
  );
};
