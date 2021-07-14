import { A } from 'hookrouter';

export const Navbar = () => (
  <div>
    <h1>Test Website</h1>
    <div style={{ display: 'flex', justifyContent: 'space-around'}}>
      <A href="/">Home</A>
      <A href="/about">About</A>
      <A href="/contact">Contact</A>
    </div>
  </div>
)
