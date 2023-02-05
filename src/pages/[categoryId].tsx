import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { apiClothes } from "@/app/api";
import { Card, RenderIf, Spinner } from "@/app/component";
import { Item } from "@/app/api/clothes/type";

const InnerOfCategory: React.FC = () => {
  const { query } = useRouter();
  const category = query.categoryId;
  const { loading, data } = useQuery(apiClothes.CLOTHES_LIST_ACCORDING_TITLE, {
    variables: {
      title: category,
    },
  });

  return (
    <div className="d-flex flex-wrap">
      <RenderIf
        condition={!loading}
        renderElse={
          <div className="w-100 d-flex justify-content-center align-items-center">
            <Spinner />
          </div>
        }
      >
        {data?.getCollectionsByTitle?.items?.map((product: Item) => (
          <Card item={product} key={product?.id} />
        ))}
      </RenderIf>
    </div>
  );
};

export default InnerOfCategory;
