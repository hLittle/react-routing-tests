import { useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Page } from "../components/Page";
import { RouteContext, stageSelector } from "../contexts/routeContext";

export const Stage = () => {
  const { id } = useParams<{ id?: string }>();
  const history = useHistory();
  const { state } = useContext(RouteContext);
  const stage = stageSelector(state, id);
  const handleClick = () => {
    const nextStage = Number(id ?? 1) + 1;
    history.push(`/stage/${nextStage}`, { currentStage: nextStage })
  }
  return (
    <Page title={`Page ${stage?.name}`}>
      <button type="submit" onClick={handleClick}>Submit</button>
    </Page>
  )
}
  
