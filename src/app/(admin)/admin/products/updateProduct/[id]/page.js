import { fetchArticleById } from "@/services/ArticleService";
import UpdateProduct from "@/components/admin/updateProductComponent";

const getarticle = async (id) => {
  const data = await fetchArticleById(id);
  return data;
};
const ProductUpdatePage = async ({ params }) => {
  
  const article = await getarticle(params.id);
  return (
    <div>
      <UpdateProduct article={article}  />
    </div>
  );
};
export default ProductUpdatePage;
