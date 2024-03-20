const SimilarProd= ({p,image,description,rating,price}) =>{
  // console.log(image)
    return(
        <div className='bg-white product-card hover:bg-sky-300 flex-col m-1 p-2  border-gray-300 border-2 hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] h-[390px]  w-[272px]' >
          <div className='flex justify-center pb-10'>
          <img src={image} alt={description} className='product-image w-[220px]' ></img>
          </div>
          <center><h3 className='product-description mt-5'>{description}</h3></center>
          <center><p className='product-price text-xl'>${price}</p></center>
          <center><div className='product-rating my-2 text-xl'>{renderStarRating(rating)}</div></center>
        </div>
    )
}

const renderStarRating = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<span key={i}>⭐</span>);
    }
    return stars;
  };

export default SimilarProd