// Use server-side context to define metadata
export const metadata = {
  title: "Home - I Love IIIT Naya Raipur",
  description:
    "Welcome to 'I Love IIIT Naya Raipur'! Explore our vibrant campus life, world-class facilities, and exceptional academic opportunities.",
  keywords:
    "IIIT Naya Raipur, I Love IIIT NR, Engineering College, Campus Life, State-of-the-Art Facilities",
};

import Home from "@/components/Home"; // Import the Home component

const Page = () => {
  return (
    <main>
      <Home />
    </main>
  );
};

export default Page;
