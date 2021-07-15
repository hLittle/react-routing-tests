import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Page } from "../components/Page";
import { RouteContext, stageSelector } from "../contexts/routeContext";

export const Stage = () => {
  const { state } = useContext(RouteContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const stage = stageSelector(state, id);
  const handleClick = () => {
    navigate(`/stage/${Number(id ?? 1) + 1}`)
  }
  return (
    <Page title={`Page ${stage?.name}`}>
      <button type="submit" onClick={handleClick}>Submit</button>
    </Page>
  )
}
  
