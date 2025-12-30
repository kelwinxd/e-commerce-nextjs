import AddCartBtn from "@/app/components/AddCartBtn/AddCartBtn";
import productsData from "../../../data/products.json";
import BreadCrumb from "@/app/components/BreadCrumb/BreadCrumb";

type Product = {
  id: number;
  title: string;
  category: string;
  price: number;
  image: string;
};

type Props = {
  params: {
    id: string;
  };
};

export default async function Page({ params }: Props) {
  const products = productsData as Product[];
  const {id} = await params;
 
  const product = products.find(
    (p) => p.id === Number(id)
  );

  if (!product) {
    return <p>Produto não encontrado</p>;
  }

  return (
    <>
    <BreadCrumb />
    <div className="grid grid-cols-2 py-5 px-3 sm:px-[104px] gap-5">
    <div className="w-full h-[500px]"><img src={product.image} alt="" className="rounded-2xl w-full h-full object-cover"/></div>
    
    <div>
      <h1>{product.title}</h1>
      <p>R$ {product.price}</p>
        <AddCartBtn product={product} />

      </div>
    </div>
      </>
  );
}
