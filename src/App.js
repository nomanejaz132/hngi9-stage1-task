import { ShareIcon } from "./components/Icons";
import ProfileAvatar from "./components/ProfileImage";

function App() {
  return (
    <div className="mx-10">
      <button className="group cursor-pointer focus:ring focus:ring-[#F2F4F7] focus:rounded-full">
        <ShareIcon />
      </button>
      <ProfileAvatar />
    </div>
  );
}

export default App;
