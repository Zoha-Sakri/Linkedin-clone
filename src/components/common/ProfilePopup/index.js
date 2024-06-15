import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.scss";
import { onLogout } from "../../../api/AuthAPI";
import Button from "../Button";
import { getCurrentUser } from "../../../api/FirestoreAPI";

export default function ProfilePopup() {
  let navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({});
  useMemo(() => {
    getCurrentUser(setCurrentUser);
  }, []);
  return (
    <div className="popup-card">
      <p className="name">{currentUser?.name}</p>
      <p className="headline">{currentUser?.headline}</p>
      <Button
        title="View Profile"
        onClick={() =>
          navigate("/profile", {
            state: {
              id: currentUser?.id,
            },
          })
        }
      />
      <Button title="Log out" onClick={onLogout} />
    </div>
  );
}