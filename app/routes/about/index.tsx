import { Link } from "@remix-run/react";

export default function About() {
  return (
    <div className='py-4 w-full bg-gray-100'>
      <h1>
      About
      </h1>
      <Link to="/about/leo">
        leo
      </Link>
    </div>
  );
}
