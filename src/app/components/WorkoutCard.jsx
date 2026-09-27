import Link from "next/link";
import {
  Clock3,
  Flame,
  Star,
  Dumbbell
} from "lucide-react";
import Image from "next/image";

const WorkoutCard = ({ workout }) => {
  return (
    <Link href={`/workouts/${workout.id}`}>
      <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">

        <Image
          src={workout.image}
          alt={workout.name}
          className="h-56 w-full object-contain"
        />

        <div className="mt-4">
          <h3 className="text-xl font-black">
            {workout.name}
          </h3>

          <p className="mt-2 text-sm text-zinc-500">
            <Dumbbell size={14} className="mr-1 inline" />
            {workout.equipment}
          </p>

          <div className="mt-4 flex gap-4 text-xs text-zinc-400">
            <span>
              <Clock3 size={14} className="inline" />
              {workout.duration} min
            </span>

            <span>
              <Flame size={14} className="inline" />
              {workout.caloriesBurned} kcal
            </span>

            <span>
              <Star size={14} className="inline" />
              {workout.rating}
            </span>
          </div>
        </div>

      </div>
    </Link>
  );
};

export default WorkoutCard;