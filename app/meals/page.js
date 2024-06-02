import Link from "next/link";
import classes from "./page.module.css";
import MealGrid from "@/components/meals/MealGrid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";

async function MealsLoad() {
	const meals = await getMeals();
	return <MealGrid meals={meals} />;
}

export default async function Meals() {
	return (
		<>
			<header className={classes.header}>
				<h1>
					Delicious Meals created{" "}
					<span className={classes.highlight}>by YOU</span>
				</h1>
				<p>Choose recipie</p>
				<p className={classes.cta}>
					<Link href="/meals/share">Share your favorite recipe</Link>
				</p>
			</header>
			<main className={classes.main}>
				<Suspense
					fallback={<p className={classes.loading}>Fetching meals...</p>}
				>
					<MealsLoad />
				</Suspense>
			</main>
		</>
	);
}
