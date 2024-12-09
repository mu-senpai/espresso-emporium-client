import { FaEye, FaPen, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = (props = {}) => {

    const { coffee, products, setProducts } = props || {};

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
            .then((result) => {
                if (result.isConfirmed) {
                    fetch(`https://coffee-store-server-steel-five.vercel.app/coffee/${id}`, {
                        method: 'DELETE',
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your product has been deleted.",
                                    icon: "success"
                                });
                                const newProducts = products.filter(coffee => coffee._id != id);
                                setProducts(newProducts);
                            }
                        })
                }
            });
    }

    return (
        <div className="card flex flex-col sm:flex-row bg-[#F5F4F1] rounded-[10px] w-full">
            <figure className="w-[85%] mx-auto sm:w-[35%] p-3 sm:p-7">
                <img
                    className="w-full object-cover"
                    src={coffee.photo}
                    alt="Cup" />
            </figure>
            <div className="card-body flex-row items-center sm:w-[65%]">
                <div className="w-[80%] space-y-3">
                    <p className="text-xl"><span className="font-semibold">Name:</span> {coffee.name}</p>
                    <p className="text-xl"><span className="font-semibold">Chef:</span>  {coffee.chef}</p>
                    <p className="text-xl"><span className="font-semibold">Taste:</span>  {coffee.taste}</p>
                </div>
                <div className="w-[20%] flex flex-col gap-3">
                    <Link className="btn btn-sm border-none bg-[#D2B48C] text-white"><FaEye /></Link>
                    <Link to={`/updatecoffee/${coffee._id}`} className="btn btn-sm border-none bg-[#3C393B] text-white"><FaPen /></Link>
                    <button onClick={() => handleDelete(coffee._id)} className="btn btn-sm border-none bg-[#EA4744] text-white"><FaTrash /></button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;