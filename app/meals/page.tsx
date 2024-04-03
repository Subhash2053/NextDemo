import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";
import Loading from "./loading-out";
export default async function MealsPage() {
  const Meals = async () => {
    const meals = await getMeals();
    return <MealsGrid meals={meals} />;
  };

  return (
    <>
      <header className={classes.header}>
        <h1>
          Delecious melas, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite receipe and cook it yourself. It is easy and fun.
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your Favorite Receipe</Link>
        </p>
      </header>

      <main className={classes.main}>
        <Suspense fallback={<Loading/>}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
