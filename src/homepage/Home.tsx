import Game from "@/game/Game";
import LevelSelect from "@/game/UI/LevelSelect";
import StartGame from "@/game/UI/StartGame";

export default function Home() {
  return (
    <section className='flex flex-col items-center'>
      <StartGame />
      <LevelSelect/>
      <Game />
    </section>
  );
}
