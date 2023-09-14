import { Hero, SearchBar, CustomFilter } from "@/components";
import Image from 'next/image'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="search__area">
        <strong>Car searching area</strong>

        <SearchBar />

        <div className="filter__options">
          <CustomFilter title="fuel" />
          <CustomFilter title="year" />
        </div>
      </div>
    </main>
  );
}
