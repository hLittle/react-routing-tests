import { createContext, Dispatch, PropsWithChildren, useEffect, useReducer } from "react";
import { useLocation } from "wouter";

interface Stage {
  name: string,
  id: string;
}

interface RouteState {
  stages: Stage[];
  currentStage: string;
}

const initialState: RouteState = {
  currentStage: '1',
  stages: [{
    id: '1',
    name: 'One'
  }, {
    id: '2',
    name: 'Two'
  }, {
    id: '3',
    name: 'Three'
  }, {
    id: '4',
    name: 'Four'
  }],
}

type Actions = { type: 'UPDATE_ROUTES' | 'UPDATE_CURRENT_STAGE', payload: any };

const routeReducer = (state: any, action: Actions) => {
  switch (action.type) {
    case 'UPDATE_ROUTES':
      return {
        ...state,
        stages: action.payload
      }
    case 'UPDATE_CURRENT_STAGE':
      return {
        ...state,
        currentStage: action.payload,
      }
    default:
      return state;
  }
}

export const stageSelector = (state: RouteState, id?: string): Stage | undefined => {
  let { stages }  = state;
  if (!id) return stages[0];
  return stages.find((stage) => stage.id === id);
}

export const RouteContext = createContext({
  state: initialState,
  dispatch: ((() => {}) as Dispatch<Actions>)
});

export const RouteProvider = ({ children }: PropsWithChildren<{}>) => {
  const [state, dispatch] = useReducer(routeReducer, initialState);
  const [location] = useLocation();

  useEffect(() => {
    dispatch({ type: 'UPDATE_CURRENT_STAGE', payload: location})
  }, [location])

  return (
    <RouteContext.Provider value={{ state, dispatch }}>
      {children}
    </RouteContext.Provider>
  )
}
