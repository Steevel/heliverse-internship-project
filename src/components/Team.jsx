import { useSelector } from "react-redux";
import { Card } from "./Card";

const Team = () => {
  const team = useSelector((state) => state.team.members);
  return (
    <div className="flex flex-wrap justify-center gap-4 py-4">
      {team.map((member) => (
        <Card key={member.id} user={member} />
      ))}
    </div>
  );
};

export default Team;
