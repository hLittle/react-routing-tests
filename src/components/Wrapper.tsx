import { PropsWithChildren } from "react";

export const Wrapper = ({ children }: PropsWithChildren<{ title: string }>) => (
  <div style={{ width: '600px', height: '90vh', margin: '20px auto auto auto', textAlign: 'center', border: '1px solid grey' }}>
    {children}
  </div>
)
