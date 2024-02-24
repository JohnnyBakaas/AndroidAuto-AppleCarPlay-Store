import { makes } from "@/carData/carData";
import Card from "@/ui/finn-bil/card/Card";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export default function Page(url: Params) {
  const makeFromUrl = url.params.make;
  const make = makes.find((make) => make.make === makeFromUrl);
  if (!make || !make.make) {
    return <div>Merke ikke funnet</div>;
  }
  return (
    <div>
      <h1>{make.make}</h1>
      <div className="flex-gap center">
        {make.models.map((model) => (
          <Card key={model.name} href={`/finn-bil/${make.make}/${model.name}`}>
            <h2>{model.name}</h2>
            <img src={model.img} alt={model.img} />
          </Card>
        ))}
      </div>
    </div>
  );
}
