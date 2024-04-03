import Image from "next/image";
import classes from "./page.module.css";
import { getMeal } from "@/lib/meals";
import { notFound } from "next/navigation";

interface Meal {
  image: string;
  // other properties
}

export default function MealDetailsPage({
  params,
}: {
  params: { slug: string };
}) {
  const meal: any = getMeal(params.slug);
  if(!meal){
    notFound();
  }
  meal.instructions = meal.instructions.replace(/\n/g, "<br />");
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{params.slug}</h1>
          <p>
            By <a href={`mailto:${meal.creator_email}`}>{meal.creator} </a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>

      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{ __html: meal.instructions }}
        ></p>
      </main>
    </>
  );
}
