import React from "react";
import TextboxEdit from "@/components/AdminTextboxEdit";
import PageHeader from "@/components/ui/PageHeader";
import PageSubHeader from "@/components/ui/PageSubHeader";
import SectionImageUploader from "@/components/ui/SectionImageUploader";
import getData from "@/app/utils/getData";
import AddProduct from "@/components/admin/AddProduct";
import DeleteDataButton from "@/components/admin/DeleteDataButton";
import AdminCollapse from "@/components/AdminCollapse";
import AdmindropList from "@/components/admin/AdmindropList";
import AdminSingleInput from "@/components/admin/AdminSingleInput";
import ProductDropList from "./ProductDropList";

export default async function HomeProductSection() {
  const productSectionData = await getData("/api/productsection");
  const productCardData = await getData("/api/products");
  const productCategories = await getData("/api/productcategories");

  return (
    <section className="lg:px-[50px] px-4 py-[30px]">
      <PageHeader header="Product Section" />
      <PageSubHeader subheader="Customize the product section" />
      <span className="text-[#BFBFBF] text-[15px]">2/2</span>
      <div className="mt-10">
        <TextboxEdit
          title={"Title"}
          section="productsection"
          data={productSectionData}
          forField={"productSectionTitle"}
          value={productSectionData.productSectionTitle}
          editText={"Edit services title"}
        />
      </div>
      <div className="bg-[#EFF3F9] p-5 mt-10 rounded">
        <PageHeader header="Product card" />
        <AddProduct productCategories={productCategories} />
        {productCardData.map((product: any) => (
          <AdminCollapse title={product.name} open={false} badge={false}>
            <div className="mt-5 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <TextboxEdit
                  title={"Name"}
                  data={product}
                  section="products"
                  forField={"name"}
                  value={product.name}
                  editText={"Edit name"}
                />
                <TextboxEdit
                  title={"Description"}
                  section="products"
                  forField={"description"}
                  data={product}
                  value={product.description}
                  editText={"Edit Description"}
                />
                <ProductDropList list={productCategories} data={product} />
                <AdminSingleInput
                  title={"Color for card"}
                  data={product}
                  forField="color"
                  section={"products"}
                  value={product.color}
                />
                <AdminSingleInput
                  title={"Product Icon"}
                  data={product}
                  forField="icons"
                  section={"products"}
                  value={product.icons}
                />
              </div>
              <div className="space-y-4">
                <SectionImageUploader
                  title={"Product Image"}
                  data={product}
                  fieldFor="image"
                  section={"products"}
                />
              </div>
            </div>
            <DeleteDataButton id={product.id} section="products" />
          </AdminCollapse>
        ))}
      </div>
    </section>
  );
}
