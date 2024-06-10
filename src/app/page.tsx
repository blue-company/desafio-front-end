import Image from "next/image";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Image src="/image.jpg" alt="image" width={500} height={500} />
    </div>
  );
};
