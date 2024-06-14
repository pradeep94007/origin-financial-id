import { useFetchDataOnClient } from "../../utils/useFetchDataOnClient";
import InsuranceCardsGrid from "./insuranceCardsGrid";

type Props = {};

const ProductSection = (props: Props) => {
  const productSectionTitle: any = useFetchDataOnClient("productsection");
  const productsData: any = useFetchDataOnClient("products");
  return (
    <>
      <section
        className="max-screen mx-auto lg:mt-32 p-5 relative"
        id="Products"
      >
        <div id="Products-scroll">
          <InsuranceCardsGrid
            buttonText="Learn more"
            productsData={productsData}
            text={productSectionTitle.productSectionTitle}
          />
        </div>
      </section>
    </>
  );
};

export default ProductSection;
