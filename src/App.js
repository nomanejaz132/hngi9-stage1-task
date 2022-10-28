import { ShareIcon } from "./components/Icons";
import ProfileAvatar from "./components/ProfileImage";

function App() {
  return (
    <main className="max-w-6xl mx-auto pt-16 pb-12">
      <div className="relative flex justify-center">
        <button className="absolute top-[-21px] right-[284px] group cursor-pointer focus:ring focus:ring-[#F2F4F7] focus:rounded-full">
          <ShareIcon />
        </button>
        <ProfileAvatar />
      </div>
    </main>
  );
}

export default App;
