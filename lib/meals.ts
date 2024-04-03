import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import fs from 'fs';

const db = sql("meals.db");
export async function getMeals() {

  await new Promise((resolve) => setTimeout(resolve, 1000));
  return db.prepare("SELECT * FROM meals").all();
}

export  function getMeal(slug: string) {

  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export async function createMeal(meal: any) {
   const slug = slugify(xss(meal.title), { lower: true });
   meal.slug= slug;
   meal.instructions = xss(meal.instructions);
   meal.summary = xss(meal.summary);
   meal.title = xss(meal.title);
   meal.creator = xss(meal.creator);
   meal.creator_email = xss(meal.creator_email);

   const extension = meal.image.split('.').pop();
   const fileName = `${meal.slug}.${extension}`;

   fs.createWriteStream(`public/images/${fileName}` );
   

  return db
    .prepare(
      "INSERT INTO meals VALUES (null, ?, ?, ?, ?, ?, ?, ?)"
    )
    .run(slug, xss(meal.title), xss(meal.image), xss(meal.summary), xss(meal.instructions), xss(meal.creator), xss(meal.creator_email));
}

