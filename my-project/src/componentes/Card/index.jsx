const Card = (data) => {
    return (
        <div className="bg-white cursor-pointer w-56  h-96 rounded-lg pt-44 mt-5 ">
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/50 rounded-lg text-black text-xs m-2  px-3 py-0.5">
                    {data.data.reference}
                </span>
                <img
                    className="w-full h-full object-cover rounded-lg"
                    src={data.data.photo}
                    alt=""
                />
                <div className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1 ">
                    +
                </div>

            </figure>

        </div>
    );
};

export default Card;