import Button from "../../components/Button/Button";
import MyAnnonce from "../../components/MyAnnonce/MyAnnonce";
import MyProfile from "../../components/MyProfile/MyProfile";
import { useState } from "react";

function Dashboard() {

 const [activeview, setActiveView] = useState<"profile" | "ads">("profile");

  return (
    <section>
      <div />
      {/* Conditional rendering mellem min profil og mine annoncer når de bliver trykket på */}
      <div>
        <Button onClick={() => setActiveView("profile")}>Min Profil</Button>
        <Button onClick={() => setActiveView('ads')}>Mine Annoncer</Button>
      </div>
      {activeview === "profile" && <MyProfile />}
      {activeview === "ads" && <MyAnnonce />}

    </section>
  );
}

export default Dashboard;
