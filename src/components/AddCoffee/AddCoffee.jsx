import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

const AddCoffee = () => {

    const handleAddCoffee = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = { name, chef, supplier, taste, category, details, photo };

        fetch('https://coffee-store-server-steel-five.vercel.app/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newCoffee),
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.insertedId) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Product added successfully!',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
                form.reset();
            }
        })
    }

    return (
        <div className="w-full bg-[url(https://i.ibb.co.com/Zzrsm9Q/11.png)] bg-cover mb-10 sm:mb-14 lg:mb-20 xl:mb-28">
            <div className="w-[95%] sm:w-[90%] lg:w-[85%] xl:w-[80%] 2xl:w-[70%] mx-auto">

                <Link to={'/'} className="btn btn-sm sm:btn-md lg:btn-lg btn-ghost inline-flex items-center gap-2 lg:gap-3 my-5 sm:my-8 lg:my-10 xl:my-12">
                    <FaArrowLeft />
                    <h2 className="text-sm sm:text-lg lg:text-2xl">Back to Home</h2>
                </Link>

                <div className="card bg-[#F4F3F0] w-full shrink-0 rounded-[5px]">
                    <form onSubmit={handleAddCoffee} className="card-body space-y-6 sm:space-y-7 lg:space-y-8">

                        <h2 className="text-3xl lg:text-4xl xl:text-5xl text-center text-[#374151] [text-shadow:_0_2px_4px_rgb(55_65_81_/_0.6)]">Add New Coffee</h2>

                        <p className="w-[90%] lg:w-[80%] mx-auto text-center text-sm sm:text-base lg:text-lg text-[#1B1A1AB3]">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                        
                        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-6">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Enter coffee name" className="input input-sm sm:input-md" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Chef</span>
                                </label>
                                <input type="text" name="chef" placeholder="Enter coffee chef" className="input input-sm sm:input-md" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Supplier</span>
                                </label>
                                <input type="text" name="supplier" placeholder="Enter coffee supplier" className="input input-sm sm:input-md" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Taste</span>
                                </label>
                                <input type="text" name="taste" placeholder="Enter coffee taste" className="input input-sm sm:input-md" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Category</span>
                                </label>
                                <input type="text" name="category" placeholder="Enter coffee category" className="input input-sm sm:input-md" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Details</span>
                                </label>
                                <input type="text" name="details" placeholder="Enter coffee details" className="input input-sm sm:input-md" required />
                            </div>
                            <div className="form-control lg:col-span-2">
                                <label className="label">
                                    <span className="label-text font-semibold">Photo</span>
                                </label>
                                <input type="text" name="photo" placeholder="Enter photo URL" className="input input-sm sm:input-md" required />
                            </div>
                            <div className="form-control mt-6 lg:col-span-2">
                                <button className="btn bg-[#D2B48C] hover:bg-[#F5F4F1] hover:border-2 hover:border-[#331A15] border-2 border-[#331A15] text-[#331A15] font-rancho text-lg">Add Coffee</button>
                            </div>
                        </div>    
                    </form>
                </div>

                
            </div>
        </div>
    );
};

export default AddCoffee;