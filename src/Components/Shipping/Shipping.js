import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './Shipping.css'
const Shipping = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {user}=useAuth()
    const onSubmit = data =>
     console.log(data);
    return (
        <div>
              <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
     
      <input placeholder="name" defaultValue={user.displayName} {...register("name")} />
      
      <input defaultValue={user.email}  {...register("email", { required: true })} />
      
      {errors.email && <span className="error">This field is required</span>}
      <input placeholder="Address" defaultValue="address" {...register("Address")} />
      <input placeholder="city" defaultValue="test" {...register("city")} />
      <input placeholder="Phone Number" defaultValue="test" {...register("Phone")} />
      
      <input type="submit" />
    </form>
        </div>
    );
};

export default Shipping;