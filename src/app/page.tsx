import {
  Categories,
  LastRecipes,
  News,
  Recommendations,
  Topic,
} from "@/widgets";

export default function Home() {
  return (
    <div>
      <Topic />
      <Categories />
      <Recommendations />
      <News />
      <LastRecipes />
    </div>
  );
}
