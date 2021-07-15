import { useNavigate } from "raviger";
import { useContext } from "react";
import { Page } from "../components/Page";
import { RouteContext, stageSelector } from "../contexts/routeContext";

export const Stage = ({ id }: { id?: string }) => {
  const { state } = useContext(RouteContext);
  const stage = stageSelector(state, id);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/stage/${String(Number(id ?? 1) + 1)}`);
  }
  return (<Page title={`Page ${stage?.name}`}>
      <button type="submit" onClick={handleClick}>Submit</button>
    </Page>
  )
}
  
