import React from "react";
import Container from "../../components/Layout/Container/Container";

interface GruvboxProps {}

export const Gruvbox: React.FC<GruvboxProps> = ({}) => {
  return (
    <main className="bg-[#32302F] min-h-screen flex justify-center items-center">
      <Container>
        <div className="flex-1 flex flex-col justify-center items-center gap-2">
          <h1 className="text-4xl font-extrabold uppercase text-gray-50">
            Manavendra Sen
          </h1>
          <h2 className="text-lg font-medium text-[#EBDBB2] xl:leading-normal text-center">
            Dell SDE Intern&apos;22 • 5x Hackathon Winner (3x International){" "}
            <br />
            Software Developer • UI/UX Designer
          </h2>
        </div>
      </Container>
    </main>
  );
};
