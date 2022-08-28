import { Image } from "@nextui-org/react";

export default function NavImage() {
  return (
    <Image   
      showSkeleton
      width={500}
      height={280}  
      maxDelay={10000}
      src="https://res.cloudinary.com/daknbj7xw/image/upload/v1661704512/BestCastFM/Captura_de_ecr%C3%83__2022-08-28__%C3%83_s_17.25_a7ttdd.png"
      alt="Default Image"
    />
  );
}