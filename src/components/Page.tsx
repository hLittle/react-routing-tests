import { PropsWithChildren } from "react";

export const Page = ({ title, children}: PropsWithChildren<{ title: string }>) => (
  <div style={{ textAlign: 'left', padding: '10px'}}>
    <h2>{title}</h2>
    {children}
  </div>
)
