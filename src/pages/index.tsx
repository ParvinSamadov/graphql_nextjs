import React from "react";
import Link from "next/link";
import { useQuery } from "@apollo/client";
import { apiClothes } from "@/app/api";
import { Collection } from "@/app/api/clothes/type";
import { Album, RenderIf, Spinner } from "@/app/component";
import { HomeStyled } from "./Home.styles";
import { CategoryEnum, categoryPhotos } from "@/app/constant/data";

const Home: React.FC = () => {
  const { loading, error, data } = useQuery(apiClothes.CATEGORIES);

  return (
    <HomeStyled>
      <RenderIf
        condition={!loading}
        renderElse={
          <div className="w-100 d-flex justify-content-center align-items-center">
            <Spinner />
          </div>
        }
      >
        {data?.collections?.map((category: Collection) => (
          <Link href={category?.title.toLocaleLowerCase()} key={category.id}>
            <Album
              title={category?.title}
              img={
                categoryPhotos[
                  category?.title.toLocaleLowerCase() as `${CategoryEnum}`
                ]
              }
            />
          </Link>
        ))}
      </RenderIf>
    </HomeStyled>
  );
};

export default Home;
