import Add from "@/components/productData/Add";
import CustomizeProduct from "@/components/productData/CustomizeProduct";
import ProductImages from "@/components/productData/ProductImages";
import React from "react";

function page() {
  return (
    <div className=" mt-10 relative flex flex-col lg:flex-row gap-10 px-4">
      {/* Image */}
      <div className=" w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages />
      </div>
      {/* Text */}
      <div className=" w-full lg:w-1/2  flex flex-col gap-6 ">
        {" "}
        <h2 className=" text-3xl">Product Name:</h2>
        <p className=" text-gray-500">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
          amet. Tempore maxime incidunt doloribus corporis aspernatur officia
          dolor expedita ut aliquid eligendi vero animi vel asperiores aperiam,
          perspiciatis labore amet.
        </p>
        {/* <div className=" h-[2px] bg-gray-200" /> */}
        <div className=" flex items-center border-b border-t py-3 gap-3 ">
          <h2 className="text-xl line-through text-slate-500">$59</h2>
          <h3 className="text-2xl font-medium">$49</h3>
        </div>
        <CustomizeProduct />
        <Add />
        <div className=" border-t mb-4 text-sm">
          <h4 className=" my-4">Title</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti,
            ipsam, nisi obcaecati cum modi laboriosam ea suscipit, sit ullam
            eius minus accusamus. Nulla voluptatem architecto quis impedit?
            Fugit, et facere.
          </p>
          <h4 className=" my-4">Title</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti,
            ipsam, nisi obcaecati cum modi laboriosam ea suscipit, sit ullam
            eius minus accusamus. Nulla voluptatem architecto quis impedit?
            Fugit, et facere.
          </p>
          <h4 className=" my-4">Title</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti,
            ipsam, nisi obcaecati cum modi laboriosam ea suscipit, sit ullam
            eius minus accusamus. Nulla voluptatem architecto quis impedit?
            Fugit, et facere.
          </p>
        </div>
      </div>
    </div>
  );
}

export default page;
