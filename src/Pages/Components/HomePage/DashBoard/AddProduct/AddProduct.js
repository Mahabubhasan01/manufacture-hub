import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data,event) =>{ 
   
    const parts ={
      name:data.name,
      img:data.img,
      price:data.price,
      quantity:data.quantity,
      info:data.info,
    }
    const url = 'http://localhost:5000/parts';
    fetch(url,{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(parts)
    }).then(res=>res.json()).then(data=>{
      console.log('success',data);
      toast.success('Successfully add new product',data.name)
      event.target.reset()
    })
    console.log(data);}
  return (
    <div>
      <div className="mt-5 md:mt-0 md:col-span-2">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="shadow sm:rounded-md sm:overflow-hidden">
            <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
              <div className="grid grid-cols-3 gap-6">
                <div className="col-span-3 sm:col-span-2">
                  <label
                    htmlFor="company-website"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Product Name
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <input
                      type="text"
                      {...register('name')}
                      name="name"
                      id="company-website"
                      className="bg-base-100 flex-1 block w-full rounded-md sm:text-sm "
                      placeholder="type here"
                    />
                  </div>
                </div>
              </div>
              <div class="form-control w-full max-w-xs">
                <label
                  htmlFor="company-website"
                  className="block text-sm font-medium text-gray-700"
                >
                  Product Price
                </label>
                <input
                  type="text"
                  {...register('price')}
                  name="price"
                  placeholder="Type here"
                  class="input input-bordered w-full max-w-xs"
                />
                
              </div>
              <div class="form-control w-full max-w-xs">
                <label
                  htmlFor="company-website"
                  className="block text-sm font-medium text-gray-700"
                >
                  Product Quantity
                </label>
                <input
                {...register('quantity')}
                  type="number"
                  name="quantity"
                  placeholder="Type here"
                  class="input input-bordered w-full max-w-xs"
                />
                
              </div>
              <div>
                <label
                  htmlFor="about"
                  className="block text-sm font-medium text-gray-700"
                >
                  Product description
                </label>
                <div className="mt-1">
                  <textarea
                    id="about"
                    name="info"
                    rows={5}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                    placeholder="you@example.com"
                    defaultValue={""}
                  />
                </div>
                
              </div>

              {<div>
                <label className="block text-sm font-medium text-gray-700">
                  Upload via Photo <span className="text-info">link</span>
                </label>
                <div className="mt-1 flex items-center">
                  <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                    <svg
                      className="h-full w-full text-gray-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </span>
                  <input
                  {...register('img')}
                  type="text"
                  placeholder="Photo url......."
                  class="input input-bordered w-full max-w-xs"
                />
                </div>
              </div>}

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Upload Product photo
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4 py-3 bg-gray-50 text-center sm:px-6">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
