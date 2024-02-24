import { makes } from "@/carData/carData";
import Card from "@/ui/finn-bil/card/Card";

export default function Page() {
  return (
    <div className="flex-gap center">
      {makes.map((make) => (
        <Card key={make.make} href={`/finn-bil/${make.make}`}>
          <img src={make.img} alt={make.img} />
        </Card>
      ))}
    </div>
  );
}
