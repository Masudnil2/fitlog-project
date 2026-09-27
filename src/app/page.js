
import { getWorkouts } from "./lib/api";
import Hero from "./components/Hero";
import WorkoutCard from "./components/WorkoutCard";

export default async function Home() {
  const workouts = await getWorkouts();

  return (
    <main>
      <Hero/>

      <section id="library" className="mx-auto max-w-7xl px-5 py-20">
        <h2 className="text-3xl font-black">THE LIBRARY</h2>
      
      <p className="mt-3 text-zinc-500"> Twelve lifts covering every major muscle group.</p>
        <pre>
          {JSON.stringify(workouts, null, 2)}
        </pre>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
  {workouts.map((workout) => (
    <WorkoutCard
      key={workout.id}
      workout={workout}
    />
  ))}
</div>

      </section>
    </main>
  );
}