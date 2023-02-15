import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { apiClothes } from "@/app/api";
import { Card, RenderIf, Spinner } from "@/app/component";
import graphQLClient from "GraphQl/graphQLClient";
import { CATEGORIES, CLOTHES_LIST_ACCORDING_TITLE } from "GraphQl/queries";

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const category = params?.["categoryId"];
  console.log({ category });
  const data = await graphQLClient.request(CLOTHES_LIST_ACCORDING_TITLE, {
    title: category,
  });

  return {
    props: { data },
  };
};

const InnerOfCategory: React.FC<any> = ({ data }) => {
  console.log({ data });
  //for client-side request
  // const { query } = useRouter();
  // const category = query.categoryId;
  // const { loading, data } = useQuery(apiClothes.CLOTHES_LIST_ACCORDING_TITLE, {
  //   variables: {
  //     title: category,
  //   },
  // });

  return (
    <div className="d-flex flex-wrap">
      {/* client-side view 
      <RenderIf
        condition={!loading}
        renderElse={
          <div className="w-100 d-flex justify-content-center align-items-center">
            <Spinner />
          </div>
        }
      >
        {data?.getCollectionsByTitle?.items?.map((product: any) => (
          <Card item={product} key={product?.id} />
        ))}
      </RenderIf> */}
      {data?.getCollectionsByTitle?.items?.map((product: any) => (
        <Card item={product} key={product?.id} />
      ))}
    </div>
  );
};

export default InnerOfCategory;
