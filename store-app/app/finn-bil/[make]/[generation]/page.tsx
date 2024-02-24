import { makes } from "@/carData/carData";
import Card from "@/ui/finn-bil/card/Card";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export default function Page(url: Params) {
  const makeFromUrl = url.params.make;
  const make = makes.find((make) => make.make === makeFromUrl);

  const modelFromUrl = url.params.generation;
  const model = make?.models.find((model) => model.name === modelFromUrl);

  return (
    <div>
      <div className="flex-gap center">
        {model?.generations.map((generation) => (
          <Card href="" key={generation.generation}>
            <h2>{generation.generation}</h2>
            <img src={generation.img} alt={generation.img} />
            <p>
              {generation.startingYear} - {generation.endingYear}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
}
