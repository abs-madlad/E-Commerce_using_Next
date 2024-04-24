import React from 'react'

const InvoiceComponent = () => {
    const cartItems = useSelector((state)=> state.cart); // this state.cart is accessing the state in the store
    console.log("cart", cartItems)

    function getAmount(item,price){
        const amount=counterValue(item)*price;
        return amount;
    }

    const downloadPdfDocument = () => {
        // Assuming invoice is a string representing the ID of the element
        const input = document.getElementById('invoice'); // Make sure 'invoice' is the correct ID
        if (!input) {
            console.error("Element with ID 'invoice' not found.");
            return; // Exit the function if element is not found
        }
        
        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF();
                pdf.addImage(imgData, 'JPEG', 0, 0);
                pdf.save(`Invoice.pdf`);
            })
            .catch((error) => {
                console.error("Error generating PDF:", error);
            });
    }

  return (
    <div>
        <div id='invoice' className=' bg-white h-screen text-black p-2 '>
        <div className='p-2 mx-40'>
            <div className='p-2 flex justify-between font-mono my-5'>
                <div><img src="/logo.png" alt="womp womp nigga" /></div>
                <span className='text-5xl font-medium'>INVOICE</span>
            </div>
            <div className='p-2 flex justify-between m-5'>
                <div>
                    <span>Billed to</span>
                    <p>Customer Name</p>
                    <p>phone number</p>
                    <p>Customer address</p>
                </div>
                <div>
                    <span>Invoice no.</span>
                    <p>Date</p>
                </div>
            </div>
        </div>
        <div>
            <center><table className='w-[50rem] mb-10' >
                <thead>
                    <tr className='bg-gray-200'>
                        <th>Item</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                {cartItems.map((item)=>(
                            <tr key={item._id} className='cartCard my-2 bg-gray-100'>
                                {/* <td className=" p-[10px] "><img src={`http://localhost:8080/api/product/${item.image}`} className='w-[60px]' alt='img'/> <button className='btn px-2' onClick={()=>handleRemoveItem(item._id)}>Remove</button></td> */}
                                <td className=" p-[10px] "><p className='text-black'>{item.name}</p></td>
                                <td className=" p-[10px] "><p>{counterValue(item._id)}</p></td>
                                <td className=" p-[10px] "><h5 className='text-black '>{item.price}</h5></td>
                                <td className=" p-[10px] ">{getAmount(item._id,item.price)}</td>
                            </tr>
                        ))}
                </tbody>
            </table></center>
            </div>
            </div>
    </div>
  )
}

export default InvoiceComponent