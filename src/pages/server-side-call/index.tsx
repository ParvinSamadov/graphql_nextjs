import React from "react";

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

const Index: React.FC = ({ data }) => {
  console.log({ data });
  return (
    <ul>
      {data?.map((row) => (
        <li key={row?.id}>{row?.title}</li>
      ))}
    </ul>
  );
};

export default Index;
