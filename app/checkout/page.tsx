// "use client";

// import { useState } from "react";
// import { useCartStore } from "../store/useCartStore";
// import { CiCreditCard1, CiCirclePlus, CiCircleMinus } from "react-icons/ci";
// import { RiAccountBoxLine } from "react-icons/ri";
// import masterlogo from "../../public/mastercard.png";
// import visalogo from "../../public/visacard.png";
// import vervelogo from "../../public/vervecard.png";
// import { useRouter } from "next/navigation";
// import type { StaticImageData } from "next/image";
// import Image from "next/image";



// export default function Checkout() {
//   const router = useRouter();

//   // Cart store
//   const cartItems = useCartStore((state) => state.cartItems);
//   const calculateSubtotal = useCartStore((state) => state.calculateSubtotal);
//   const calculateTotal = useCartStore((state) => state.calculateTotal);

//   // Form state
//   const [formData, setFormData] = useState({
//     cardNumber: "",
//     month: "",
//     year: "",
//     firstname: "",
//     lastname: "",
//     email: "",
//     phone: "",
//     country: "",
//     address: "",
//     address2: "",
//     state: "",
//     city: "",
//     guestFirstName: "",
//     guestLastName: "",
//   });

//  const [cardImage, setCardImage] = useState<string | StaticImageData>(""); // card image URL as string
// const [checkbox, setCheckbox] = useState<boolean>(false); // checkbox state
// const [showGuestForm, setShowGuestForm] = useState<boolean>(false); // toggle guest form
// const [errors, setErrors] = useState<Record<string, string>>({}); // object where key is field name, value is error message

//   // Dropdown data
//   const months = [
//     "Month",
//     "01 Jan",
//     "02 Feb",
//     "03 Mar",
//     "04 Apr",
//     "05 May",
//     "06 Jun",
//     "07 Jul",
//     "08 Aug",
//     "09 Sep",
//     "10 Oct",
//     "11 Nov",
//     "12 Dec",
//   ];
//   const years = [
//     "Year",
//     "2023",
//     "2024",
//     "2025",
//     "2026",
//     "2027",
//     "2028",
//     "2029",
//     "2030",
//     "2031",
//     "2032",
//     "2033",
//   ];
//   const countries = [
//     "Select Country",
//     "USA",
//     "Nigeria",
//     "Uganda",
//     "Canada",
//     "Argentina",
//     "Ghana",
//     "South Africa",
//     "Jamaica",
//     "China",
//     "Australia",
//   ];

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//   const { name, value } = e.target;
//   setFormData((prev) => ({ ...prev, [name]: value }));

//   // Clear error
//   if (errors[name]) {
//     setErrors((prev) => {
//       const newErrors = { ...prev };
//       delete newErrors[name];
//       return newErrors;
//     });
//   }

//   const detectCardType = (cardNumber: string) => {
//     const masterCardPattern = /^5[1-5]\d{14}$/;
//     const verveCardPattern = /^(506(1|2|3|7)|5047)\d{12}$/;
//     const visaCardPattern = /^4\d{12}(?:\d{3})?$/;

//     if (verveCardPattern.test(cardNumber)) setCardImage(vervelogo);
//     else if (masterCardPattern.test(cardNumber)) setCardImage(masterlogo);
//     else if (visaCardPattern.test(cardNumber)) setCardImage(visalogo);
//     else setCardImage("");
//   };

//   const toggleGuestForm = () => setShowGuestForm(!showGuestForm);

//   // Simple validation
//   const validateForm = () => {
//     const newErrors: Record<string, string> = {};
//     if (!formData.cardNumber) newErrors.cardNumber = "Card number is required";
//     if (!formData.month || formData.month === "Month")
//       newErrors.month = "Month is required";
//     if (!formData.year || formData.year === "Year")
//       newErrors.year = "Year is required";
//     if (!formData.firstname) newErrors.firstname = "First name is required";
//     if (!formData.lastname) newErrors.lastname = "Last name is required";
//     if (!formData.email) newErrors.email = "Email is required";
//     if (!formData.phone) newErrors.phone = "Phone is required";
//     if (!formData.country || formData.country === "Select Country")
//       newErrors.country = "Country is required";
//     if (!formData.address) newErrors.address = "Address is required";
//     if (!checkbox) newErrors.checkbox = "You must agree to terms and conditions";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//   e.preventDefault();
//   if (!validateForm()) return;

//   // Save payment info (or process payment)
//   localStorage.setItem("paymentInfo", JSON.stringify(formData));
//   router.push("/receipt"); 
// };

//   const subtotal = calculateSubtotal();
//   const tax = subtotal * 0.1;
//   const total = calculateTotal();

//   if(cartItems.length === 0) return <div className="flex justify-center items-center font-semibold my-10">No Cart Items Found. Please return to Home page</div>

//   return (
//     <div className="overflow-x-hidden bg-gray-50 pt-[90px]">
//       <div className="container mx-auto p-4 md:p-12 flex flex-col lg:flex-row gap-8">
//         {/* Cart Summary */}
//         <div className="lg:w-1/3 bg-white p-4 rounded-lg shadow-md">
//           <h2 className="font-bold text-xl mb-4">Your Cart</h2>
//           {cartItems.length === 0 ? (
//             <p>No items in cart</p>
//           ) : (
//             <div className="space-y-2">
//               {cartItems.map((item) => (
//                 <div key={item.id} className="flex justify-between">
//                   <span>
//                     {item.name} x {item.quantity}
//                   </span>
//                   <span>${(item.price * item.quantity).toFixed(2)}</span>
//                 </div>
//               ))}
//               <hr className="my-2" />
//               <div className="flex justify-between font-semibold">
//                 <span>Subtotal:</span>
//                 <span>${subtotal.toFixed(2)}</span>
//               </div>
//               <div className="flex justify-between font-semibold">
//                 <span>Tax:</span>
//                 <span>${tax.toFixed(2)}</span>
//               </div>
//               <div className="flex justify-between font-bold text-lg">
//                 <span>Total:</span>
//                 <span>${total.toFixed(2)}</span>
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Payment & Guest Form */}
//         <div className="lg:w-2/3 bg-white p-6 rounded-lg shadow-md">
//           <div className="flex items-center gap-4 mb-4">
//             <CiCreditCard1 size={30} />
//             <h1 className="text-2xl font-bold">Payment Information</h1>
//           </div>
//           <hr className="mb-6" />

//           <form onSubmit={handleSubmit} className="space-y-6">
//             {/* Card Details */}
//             <div className="space-y-4">
//               <h2 className="text-xl font-semibold">Card Details</h2>
//               <div>
//                 <label className="block font-medium mb-1">Card Number</label>
//                 <div className="flex items-center border rounded-md overflow-hidden">
//                   <input
//                     type="text"
//                     name="cardNumber"
//                     value={formData.cardNumber}
//                     onChange={handleChange}
//                     placeholder="1234 5678 9012 3456"
//                     className="flex-1 h-10 px-3 outline-none"
//                   />
//                   {cardImage && (
//                     <Image src={cardImage} height={32} width={40} alt="card" className="mx-2" />
//                   )}
//                 </div>
//                 {errors.cardNumber && (
//                   <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>
//                 )}
//               </div>

//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <label className="block font-medium mb-1">Expiry Month</label>
//                   <select
//                     name="month"
//                     value={formData.month}
//                     onChange={handleChange}
//                     className="w-full h-10 border rounded-md px-3"
//                   >
//                     {months.map((month) => (
//                       <option value={month} key={month}>
//                         {month}
//                       </option>
//                     ))}
//                   </select>
//                   {errors.month && (
//                     <p className="text-red-500 text-sm mt-1">{errors.month}</p>
//                   )}
//                 </div>
//                 <div>
//                   <label className="block font-medium mb-1">Expiry Year</label>
//                   <select
//                     name="year"
//                     value={formData.year}
//                     onChange={handleChange}
//                     className="w-full h-10 border rounded-md px-3"
//                   >
//                     {years.map((year) => (
//                       <option value={year} key={year}>
//                         {year}
//                       </option>
//                     ))}
//                   </select>
//                   {errors.year && (
//                     <p className="text-red-500 text-sm mt-1">{errors.year}</p>
//                   )}
//                 </div>
//               </div>
//             </div>

//             {/* Guest / Billing Info */}
//             <div className="space-y-4">
//               <div className="flex items-center gap-4">
//                 <RiAccountBoxLine size={25} />
//                 <h2 className="text-xl font-semibold">Billing / Guest Information</h2>
//               </div>
//               <hr className="my-2" />

//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <label className="block font-medium mb-1">First Name</label>
//                   <input
//                     type="text"
//                     name="firstname"
//                     value={formData.firstname}
//                     onChange={handleChange}
//                     placeholder="John"
//                     className="w-full h-10 border rounded-md px-3"
//                   />
//                   {errors.firstname && (
//                     <p className="text-red-500 text-sm mt-1">{errors.firstname}</p>
//                   )}
//                 </div>
//                 <div>
//                   <label className="block font-medium mb-1">Last Name</label>
//                   <input
//                     type="text"
//                     name="lastname"
//                     value={formData.lastname}
//                     onChange={handleChange}
//                     placeholder="Doe"
//                     className="w-full h-10 border rounded-md px-3"
//                   />
//                   {errors.lastname && (
//                     <p className="text-red-500 text-sm mt-1">{errors.lastname}</p>
//                   )}
//                 </div>
//               </div>

//               <div>
//                 <label className="block font-medium mb-1">Email</label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="john.doe@example.com"
//                   className="w-full h-10 border rounded-md px-3"
//                 />
//                 {errors.email && (
//                   <p className="text-red-500 text-sm mt-1">{errors.email}</p>
//                 )}
//               </div>

//               <div>
//                 <label className="block font-medium mb-1">Phone</label>
//                 <input
//                   type="tel"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   placeholder="+234 800 000 0000"
//                   className="w-full h-10 border rounded-md px-3"
//                 />
//                 {errors.phone && (
//                   <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
//                 )}
//               </div>

//               <div>
//                 <label className="block font-medium mb-1">Country/Region</label>
//                 <select
//                   name="country"
//                   value={formData.country}
//                   onChange={handleChange}
//                   className="w-full h-10 border rounded-md px-3"
//                 >
//                   {countries.map((country) => (
//                     <option value={country} key={country}>
//                       {country}
//                     </option>
//                   ))}
//                 </select>
//                 {errors.country && (
//                   <p className="text-red-500 text-sm mt-1">{errors.country}</p>
//                 )}
//               </div>

//               <div>
//                 <label className="block font-medium mb-1">Address</label>
//                 <input
//                   type="text"
//                   name="address"
//                   value={formData.address}
//                   onChange={handleChange}
//                   placeholder="123 Main Street"
//                   className="w-full h-10 border rounded-md px-3"
//                 />
//                 {errors.address && (
//                   <p className="text-red-500 text-sm mt-1">{errors.address}</p>
//                 )}
//               </div>

//               <div>
//                 <label className="block font-medium mb-1">Address 2 (Optional)</label>
//                 <input
//                   type="text"
//                   name="address2"
//                   value={formData.address2}
//                   onChange={handleChange}
//                   placeholder="Apartment, suite, etc."
//                   className="w-full h-10 border rounded-md px-3"
//                 />
//               </div>

//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <label className="block font-medium mb-1">State</label>
//                   <input
//                     type="text"
//                     name="state"
//                     value={formData.state}
//                     onChange={handleChange}
//                     placeholder="Lagos"
//                     className="w-full h-10 border rounded-md px-3"
//                   />
//                 </div>
//                 <div>
//                   <label className="block font-medium mb-1">City</label>
//                   <input
//                     type="text"
//                     name="city"
//                     value={formData.city}
//                     onChange={handleChange}
//                     placeholder="Ikeja"
//                     className="w-full h-10 border rounded-md px-3"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Optional Guest */}
//             <div className="space-y-4">
//               <div
//                 className="flex items-center gap-2 cursor-pointer"
//                 onClick={toggleGuestForm}
//               >
//                 {showGuestForm ? <CiCircleMinus size={25} /> : <CiCirclePlus size={25} />}
//                 <span className="font-medium">Add guest name</span>
//               </div>

//               {showGuestForm && (
//                 <div className="bg-gray-50 p-4 rounded-md space-y-4">
//                   <p className="text-sm text-gray-600">
//                     This order is in your name. Add guest information if needed.
//                   </p>
//                   <div className="grid grid-cols-2 gap-4">
//                     <div>
//                       <label className="block font-medium mb-1">Guest First Name</label>
//                       <input
//                         type="text"
//                         name="guestFirstName"
//                         value={formData.guestFirstName}
//                         onChange={handleChange}
//                         placeholder="Guest's first name"
//                         className="w-full h-10 border rounded-md px-3"
//                       />
//                     </div>
//                     <div>
//                       <label className="block font-medium mb-1">Guest Last Name</label>
//                       <input
//                         type="text"
//                         name="guestLastName"
//                         value={formData.guestLastName}
//                         onChange={handleChange}
//                         placeholder="Guest's last name"
//                         className="w-full h-10 border rounded-md px-3"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Terms */}
//             <div className="flex items-start gap-3">
//               <input
//                 type="checkbox"
//                 id="terms"
//                 checked={checkbox}
//                 onChange={() => setCheckbox(!checkbox)}
//                 className="mt-1"
//               />
//               <label htmlFor="terms" className="text-sm">
//                 By clicking this you agree to our{" "}
//                 <a href="/terms" className="font-bold underline">
//                   terms and conditions
//                 </a>
//               </label>
//             </div>
//             {errors.checkbox && (
//               <p className="text-red-500 text-sm">{errors.checkbox}</p>
//             )}

//             {/* Submit */}
//             <button
//               type="submit"
//               className="w-full bg-[#7C6A46] text-white py-3 rounded-md font-bold hover:bg-[#5a4d34] transition-colors"
//             >
//               Complete Checkout
//             </button>
//           </form>
//         </div>
//       </div>

//     </div>
//   );
// }


"use client";

import { useState } from "react";
import { useCartStore } from "../store/useCartStore";
import { CiCreditCard1, CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { RiAccountBoxLine } from "react-icons/ri";
import masterlogo from "../../public/mastercard.png";
import visalogo from "../../public/visacard.png";
import vervelogo from "../../public/vervecard.png";
import { useRouter } from "next/navigation";
import type { StaticImageData } from "next/image";
import Image from "next/image";

interface CartItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

interface FormData {
  cardNumber: string;
  month: string;
  year: string;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  country: string;
  address: string;
  address2: string;
  state: string;
  city: string;
  guestFirstName: string;
  guestLastName: string;
}

export default function Checkout() {
  const router = useRouter();

  // Cart store
  const cartItems: CartItem[] = useCartStore((state) => state.cartItems);
  const calculateSubtotal = useCartStore((state) => state.calculateSubtotal);
  const calculateTotal = useCartStore((state) => state.calculateTotal);

  // Form state
  const [formData, setFormData] = useState<FormData>({
    cardNumber: "",
    month: "",
    year: "",
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    country: "",
    address: "",
    address2: "",
    state: "",
    city: "",
    guestFirstName: "",
    guestLastName: "",
  });

  const [cardImage, setCardImage] = useState<string | StaticImageData>(""); 
  const [checkbox, setCheckbox] = useState<boolean>(false); 
  const [showGuestForm, setShowGuestForm] = useState<boolean>(false); 
  const [errors, setErrors] = useState<Record<string, string>>({}); 

  // Dropdown options
  const months = [
    "Month","01 Jan","02 Feb","03 Mar","04 Apr","05 May","06 Jun",
    "07 Jul","08 Aug","09 Sep","10 Oct","11 Nov","12 Dec"
  ];

  const years = ["Year","2023","2024","2025","2026","2027","2028","2029","2030","2031","2032","2033"];

  const countries = [
    "Select Country","USA","Nigeria","Uganda","Canada","Argentina",
    "Ghana","South Africa","Jamaica","China","Australia"
  ];

  const detectCardType = (cardNumber: string) => {
    const masterCardPattern = /^5[1-5]\d{14}$/;
    const verveCardPattern = /^(506(1|2|3|7)|5047)\d{12}$/;
    const visaCardPattern = /^4\d{12}(?:\d{3})?$/;

    if (verveCardPattern.test(cardNumber)) setCardImage(vervelogo);
    else if (masterCardPattern.test(cardNumber)) setCardImage(masterlogo);
    else if (visaCardPattern.test(cardNumber)) setCardImage(visalogo);
    else setCardImage("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }

    if (name === "cardNumber") detectCardType(value);
  };

  const toggleGuestForm = () => setShowGuestForm(!showGuestForm);

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!formData.cardNumber) newErrors.cardNumber = "Card number is required";
    if (!formData.month || formData.month === "Month") newErrors.month = "Month is required";
    if (!formData.year || formData.year === "Year") newErrors.year = "Year is required";
    if (!formData.firstname) newErrors.firstname = "First name is required";
    if (!formData.lastname) newErrors.lastname = "Last name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phone) newErrors.phone = "Phone is required";
    if (!formData.country || formData.country === "Select Country") newErrors.country = "Country is required";
    if (!formData.address) newErrors.address = "Address is required";
    if (!checkbox) newErrors.checkbox = "You must agree to terms and conditions";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    localStorage.setItem("paymentInfo", JSON.stringify(formData));
    router.push("/receipt");
  };

  const subtotal = calculateSubtotal();
  const tax = subtotal * 0.1;
  const total = calculateTotal();

  // Early return if cart is empty
  if(cartItems.length === 0) 
    return <div className="flex justify-center items-center font-semibold my-10">No Cart Items Found. Please return to Home page</div>

  return (
    <div className="overflow-x-hidden bg-gray-50 pt-[90px]">
      <div className="container mx-auto p-4 md:p-12 flex flex-col lg:flex-row gap-8">
        {/* Cart Summary */}
        <div className="lg:w-1/3 bg-white p-4 rounded-lg shadow-md">
          <h2 className="font-bold text-xl mb-4">Your Cart</h2>
          <div className="space-y-2">
            {cartItems.map(item => (
              <div key={item.id} className="flex justify-between">
                <span>{item.name} x {item.quantity}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <hr className="my-2" />
            <div className="flex justify-between font-semibold">
              <span>Subtotal:</span><span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span>Tax:</span><span>${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>Total:</span><span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Payment & Guest Form */}
        <div className="lg:w-2/3 bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center gap-4 mb-4">
            <CiCreditCard1 size={30} />
            <h1 className="text-2xl font-bold">Payment Information</h1>
          </div>
          <hr className="mb-6" />

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Card Details */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Card Details</h2>
              <div>
                <label className="block font-medium mb-1">Card Number</label>
                <div className="flex items-center border rounded-md overflow-hidden">
                  <input
                    type="text"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    placeholder="1234 5678 9012 3456"
                    className="flex-1 h-10 px-3 outline-none"
                  />
                  {cardImage && (
                    <Image src={cardImage} height={32} width={40} alt="card" className="mx-2" />
                  )}
                </div>
                {errors.cardNumber && <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium mb-1">Expiry Month</label>
                  <select name="month" value={formData.month} onChange={handleChange} className="w-full h-10 border rounded-md px-3">
                    {months.map(month => <option value={month} key={month}>{month}</option>)}
                  </select>
                  {errors.month && <p className="text-red-500 text-sm mt-1">{errors.month}</p>}
                </div>
                <div>
                  <label className="block font-medium mb-1">Expiry Year</label>
                  <select name="year" value={formData.year} onChange={handleChange} className="w-full h-10 border rounded-md px-3">
                    {years.map(year => <option value={year} key={year}>{year}</option>)}
                  </select>
                  {errors.year && <p className="text-red-500 text-sm mt-1">{errors.year}</p>}
                </div>
              </div>
            </div>

            {/* Guest / Billing Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <RiAccountBoxLine size={25} />
                <h2 className="text-xl font-semibold">Billing / Guest Information</h2>
              </div>
              <hr className="my-2" />
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium mb-1">First Name</label>
                  <input type="text" name="firstname" value={formData.firstname} onChange={handleChange} placeholder="John" className="w-full h-10 border rounded-md px-3" />
                  {errors.firstname && <p className="text-red-500 text-sm mt-1">{errors.firstname}</p>}
                </div>
                <div>
                  <label className="block font-medium mb-1">Last Name</label>
                  <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} placeholder="Doe" className="w-full h-10 border rounded-md px-3" />
                  {errors.lastname && <p className="text-red-500 text-sm mt-1">{errors.lastname}</p>}
                </div>
              </div>

              <div>
                <label className="block font-medium mb-1">Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john.doe@example.com" className="w-full h-10 border rounded-md px-3" />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block font-medium mb-1">Phone</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+234 800 000 0000" className="w-full h-10 border rounded-md px-3" />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label className="block font-medium mb-1">Country/Region</label>
                <select name="country" value={formData.country} onChange={handleChange} className="w-full h-10 border rounded-md px-3">
                  {countries.map(country => <option value={country} key={country}>{country}</option>)}
                </select>
                {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country}</p>}
              </div>

              <div>
                <label className="block font-medium mb-1">Address</label>
                <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="123 Main Street" className="w-full h-10 border rounded-md px-3" />
                {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
              </div>

              <div>
                <label className="block font-medium mb-1">Address 2 (Optional)</label>
                <input type="text" name="address2" value={formData.address2} onChange={handleChange} placeholder="Apartment, suite, etc." className="w-full h-10 border rounded-md px-3" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium mb-1">State</label>
                  <input type="text" name="state" value={formData.state} onChange={handleChange} placeholder="Lagos" className="w-full h-10 border rounded-md px-3" />
                </div>
                <div>
                  <label className="block font-medium mb-1">City</label>
                  <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="Ikeja" className="w-full h-10 border rounded-md px-3" />
                </div>
              </div>
            </div>

            {/* Optional Guest */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 cursor-pointer" onClick={toggleGuestForm}>
                {showGuestForm ? <CiCircleMinus size={25} /> : <CiCirclePlus size={25} />}
                <span className="font-medium">Add guest name</span>
              </div>

              {showGuestForm && (
                <div className="bg-gray-50 p-4 rounded-md space-y-4">
                  <p className="text-sm text-gray-600">
                    This order is in your name. Add guest information if needed.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block font-medium mb-1">Guest First Name</label>
                      <input type="text" name="guestFirstName" value={formData.guestFirstName} onChange={handleChange} placeholder="Guest's first name" className="w-full h-10 border rounded-md px-3" />
                    </div>
                    <div>
                      <label className="block font-medium mb-1">Guest Last Name</label>
                      <input type="text" name="guestLastName" value={formData.guestLastName} onChange={handleChange} placeholder="Guest's last name" className="w-full h-10 border rounded-md px-3" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Terms */}
            <div className="flex items-start gap-3">
              <input type="checkbox" id="terms" checked={checkbox} onChange={() => setCheckbox(!checkbox)} className="mt-1" />
              <label htmlFor="terms" className="text-sm">
                By clicking this you agree to our{" "}
                <a href="/terms" className="font-bold underline">
                  terms and conditions
                </a>
              </label>
            </div>
            {errors.checkbox && <p className="text-red-500 text-sm">{errors.checkbox}</p>}

            {/* Submit */}
            <button type="submit" className="w-full bg-[#7C6A46] text-white py-3 rounded-md font-bold hover:bg-[#5a4d34] transition-colors">
              Complete Checkout
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
