import { BsXLg } from "react-icons/bs";
import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'


const Update = () => {

    const products = useLoaderData();
    console.log(products)

    const {name, brand, category
        , image, price, rating, description, 
        _id   } = products


        const handleUpdateProduct = (e) => {
            e.preventDefault()
    
            const form = e.target;
            const name = form.name.value;
            const price = form.price.value;
            const brand = form.brand.value;
            const description = form.description.value;
            const rating = form.rating.value;
            const category = form.category.value;
            const image = form.image.value;
    
            const newProduct = { name, price, brand, description, rating, category, image };
            console.log(newProduct);
    
    
    
            fetch(`https://touchup-brand-server.vercel.app/products/${_id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newProduct)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
    
    
                    if(data.modifiedCount > 0){
                        Swal.fire({
                            title: 'Success!',
                            text: 'Product Updated Successfully',
                            icon: 'success',
                            confirmButtonText: 'Ok'
                          })
                    }
                })
        }

    return (
        <div>
      <div className="bg-[#f1c9c12d] rounded-xl md:p-24 p-4 my-20">
        <h2 className="text-3xl mb-10 text-center font-bold">Update Your Cosmetics: <span className="text-[#EC6F66] font-extrabold">{name}</span></h2>
        <form onSubmit={handleUpdateProduct}>
          {/* form name and price row */}
          <div className="md:flex gap-4 mb-8">
            <div className="form-control   md:w-1/2 ">
              <label className="label ">
                <span className="label-text ">Product Name</span>
              </label>
              <label className="input-group ">
                <input
                  type="text"
                  defaultValue={name}
                  placeholder="Product Name"
                  name="name"
                  className="input form-border input-bordered w-full"
                />
              </label>
            </div>

            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Product Price</span>
              </label>
              <label className="input-group">
                <input
                  type="number"
                  defaultValue={price}
                  placeholder="Product Price"
                  name="price"
                  className="input  form-border input-bordered w-full"
                />
              </label>
            </div>
          </div>

          {/* from brand and details row */}
          <div className="md:flex gap-4 mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Brand Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  defaultValue={brand}
                  placeholder="Brand Name"
                  name="brand"
                  className="input  form-border input-bordered w-full"
                />
              </label>
            </div>

            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Short Description About Product</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  defaultValue={description}
                  placeholder="Short Description"
                  name="description"
                
                  className="input form-border  input-bordered w-full"
                />
              </label>
            </div>
          </div>

          {/* from rating and category row */}
          <div className="md:flex gap-4 mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <label className="input-group">
                <input
                  type="number"
                  defaultValue={rating}
                  placeholder="Rating"
                  name="rating"
                  className="input form-border  input-bordered w-full"
                />
              </label>
            </div>

            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Product Type</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  defaultValue={category}
                  placeholder="Product Type"
                  name="category"
                  className="input form-border  input-bordered w-full"
                />
              </label>
            </div>
          </div>

          {/* from image URL row */}
          <div className="mb-8">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  defaultValue={image}
                  placeholder="Image URL"
                  name="image"
                  className="input form-border  input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <input
            type="submit"
            value="Update Cosmetics"
            className="btn btn-block btn-grad form-border "
          />
        </form>
      </div>
    </div>
    );
};

export default Update;