import CustomFilter from "@/components/CustomFilter";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import Image from "next/image";
import { fetchCars } from "@/utils";
import CarCard from "@/components/CarCard";
import { fuels, yearsOfProduction } from "@/constants";


export default async function Home({ searchParams }: { searchParams: Promise<any> }) {
  const params = await searchParams;
  const allCars = await fetchCars({
    manufacturer: params.manufacturer || '',
    year: params.year || 2022,
    fuel: params.fuel || '',
    limit: params.limit || 10,
    model: params.model || '',
  });

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  console.log(allCars)

  return (
      <main 
      className="overflow-hidden">
        <Hero/>

        <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels}/>
            <CustomFilter title="year" options={yearsOfProduction}/>
          </div>
        </div>
        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
            {allCars?.map((car) => (
  <CarCard car={car} />
))}


            </div>
          </section>
        ):(
          <div className="home__error-container">
            <h2 className="text-black text-x1
            font-bold"> Oops, no result</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
            

      </div>
      </main>

  );
}
