export type Make = {
  make: string;
  img: string;
  models: Model[];
};

export type Model = {
  name: string;
  img: string;
  generations: Generation[];
};

export type Generation = {
  generation: string;
  img: string;
  startingYear: number;
  endingYear: number;
};

export const makes: Make[] = [
  {
    make: "Audi",
    img: "https://upload.wikimedia.org/wikipedia/commons/9/92/Audi-Logo_2016.svg",
    models: [],
  },
  {
    make: "BMW",
    img: "https://www.bmw.no/content/dam/bmw/common/images/logo-icons/BMW/BMW_White_Logo.svg.asset.1670245093434.svg",
    models: [
      {
        name: "3-serie",
        img: "https://www.motortrend.com/uploads/sites/10/2015/11/2012-bmw-3-series-335-i-sedan-angular-front.png",
        generations: [
          {
            generation: "E46",
            img: "https://cdn.wheel-size.com/thumbs/7a/4b/7a4b41122fce6c7390003eb89b24cddd.png",
            startingYear: 1998,
            endingYear: 2005,
          },
          {
            generation: "E90/E91/E92/E93",
            img: "https://www.motortrend.com/uploads/sites/10/2015/11/2009-bmw-3-series-328i-sedan-angular-front.png?fit=around%7C875:492",
            startingYear: 2005,
            endingYear: 2011,
          },
          {
            generation: "F30/F31/F34",
            img: "	https://www.motortrend.com/uploads/sites/10/2015/11/2012-bmw-3-series-335-i-sedan-angular-front.png",
            startingYear: 2011,
            endingYear: 2019,
          },
        ],
      },
      {
        name: "5-serie",
        img: "https://www.motortrend.com/uploads/sites/10/2015/11/2013-bmw-5-series-535i-sedan-angular-front.png",
        generations: [],
      },
    ],
  },
  {
    make: "Mercedes",
    img: "https://d2638j3z8ek976.cloudfront.net/9225333588ae6246969b338888aeae1973e9feb0/1708329303/images/mb-star-svg.svg",
    models: [],
  },
  {
    make: "Volvo",
    img: "https://upload.wikimedia.org/wikipedia/commons/2/29/Volvo-Iron-Mark-Black.svg",
    models: [],
  },
  {
    make: "Volkswagen",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Volkswagen_logo_2019.svg/1200px-Volkswagen_logo_2019.svg.png",
    models: [],
  },
].sort((a, b) => a.make.localeCompare(b.make));
