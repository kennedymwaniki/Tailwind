const ShoeCard = ({ imgUrl, changeBigShoeImage, bigShoeImg }) => {
  const handlelick = () => {
    if (bigShoeImg !== imgUrl.bigShoe) {
      changeBigShoeImage(imgUrl.bigShoe);
    }
  };
  return (
    <div
      onClick={handlelick}
      className={`border-2 rounded-xl ${bigShoeImg === imgUrl ? "bg-coral-red" : "bg-transparent"} cursor-pointer max-sm:flex-1`}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          src={imgUrl.thumbnail}
          alt="shoeCollection"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
