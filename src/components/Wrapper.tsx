import { PropsWithChildren } from "react";
import { useRoutes } from "react-router-dom";
import { Stage } from "../pages/Stage";

export const Wrapper = ({ children }: PropsWithChildren<{ title: string }>) => {
  let element = useRoutes([
    { path: '/stage/:id', element: <Stage />},
    { path: '/', element: <Stage /> }
  ])
  return (
  <div style={{ width: '600px', height: '90vh', margin: '20px auto auto auto', textAlign: 'center', border: '1px solid grey' }}>
    {element}
  </div>
)}
