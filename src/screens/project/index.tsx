import { Navigate, Route, Routes } from "react-router-dom";
import EpicScreen from "screens/epic";
import KanBanScreen from "screens/kanban";

const Project = () => {
  return (
    <>
      <Routes>
        <Route path="kanban" index element={<KanBanScreen />} />
        <Route path="epic" element={<EpicScreen />} />
      </Routes>
      {/* {!window.location.pathname.includes("kanban") && (
        <Navigate to={window.location.pathname + "/kanban"} replace={true} />
      )} */}
      {/* {!isFirstRender.current && <Navigate to="kanban" />} */}
    </>
  );
};

export default Project;
