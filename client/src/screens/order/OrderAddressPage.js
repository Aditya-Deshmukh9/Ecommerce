import React, { useState, useEffect } from 'react';
import { VscLoading } from 'react-icons/vsc';
import { useDispatch, useSelector } from 'react-redux';
import {
  createAddressId,
  getAddress,
  getSelectAddress,
} from '../../features/orderSlice';

function OrderAddressPage() {
  const [userData, setUserData] = useState({});
  const [isNewAddress, setIsNewAddress] = useState(false);
  const { userInfo } = useSelector((state) => state.auth);
  const { addresses, selectaddress, loading, newCreated } = useSelector(
    (state) => state.order
  );
  const [limitAddress, setLimitAddress] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfo) {
      dispatch(getAddress(userInfo._id));
    }
  }, [dispatch, userInfo]);

  useEffect(() => {
    if (newCreated) {
      dispatch(getAddress(userInfo._id));
      setIsNewAddress(false);
    }
  }, [dispatch, userInfo._id, newCreated]);

  useEffect(() => {
    setLimitAddress(addresses.length >= 4);
  }, [addresses]);

  useEffect(() => {
    if (selectaddress) {
      setIsNewAddress(false);
    }
  }, [selectaddress]);

  const handleUserDataChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddressSubmit = (e) => {
    e.preventDefault();
    const userId = userInfo._id;
    const addressData = {
      address: userData.address,
      city: userData.city,
      pincode: userData.pincode,
      state: userData.state,
      country: userData.country,
    };

    if (isNewAddress) {
      dispatch(createAddressId({ addressData, userId }));
    } else {
      const selectedAddress = addresses.find(
        (address) => address._id === userData._id
      );
      if (selectedAddress) {
        dispatch(getSelectAddress(selectedAddress._id));
      }
    }
  };

  const handleSelectChange = (e) => {
    const selectedAddressId = e.target.value;
    if (selectedAddressId === 'new') {
      setIsNewAddress(true);
      setUserData({});
    } else {
      const selectedAddress = addresses.find(
        (address) => address._id === selectedAddressId
      );
      if (selectedAddress) {
        dispatch(getSelectAddress({ ...userInfo, ...selectedAddress }));
        setIsNewAddress(false);
      }
    }
  };

  const isDisabled =
    !userData?.address ||
    !userData?.city ||
    !userData?.pincode ||
    !userData?.state ||
    !userData?.country;

  return (
    <div className="flex w-full justify-center gap-4 md:h-screen">
      <div className="flex w-full flex-col gap-y-2 p-4">
        <h2 className="text-xl font-semibold">Delivery</h2>
        <form onSubmit={handleAddressSubmit} className="space-y-2">
          <div className="space-y-2">
            <select
              onChange={handleSelectChange}
              className="w-full rounded-md border border-[#e0e0e0] bg-white px-6 py-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            >
              {addresses.length > 0 ? (
                addresses.map((address, index) => (
                  <option key={index} value={address._id}>
                    {address.address}, {address.city}, {address.state},{' '}
                    {address.country} - {address.pincode}
                  </option>
                ))
              ) : (
                <option value="">No address available</option>
              )}
              {!limitAddress && <option value="new">Add New Address</option>}
            </select>
          </div>
          {isNewAddress && (
            <>
              <input
                type="text"
                name="address"
                value={userData.address || ''}
                onChange={handleUserDataChange}
                placeholder="Address"
                className="w-full rounded-md border border-[#e0e0e0] bg-white px-6 py-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
              <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <input
                      type="text"
                      name="city"
                      value={userData.city || ''}
                      onChange={handleUserDataChange}
                      placeholder="City"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white px-6 py-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <input
                      type="number"
                      name="pincode"
                      value={userData.pincode || ''}
                      onChange={handleUserDataChange}
                      placeholder="Pincode"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white px-6 py-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
              </div>
              <div className="mb-5 w-full">
                <select
                  name="state"
                  value={userData.state || ''}
                  onChange={handleUserDataChange}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white px-6 py-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                >
                  <option value="">Select State</option>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                  <option value="Assam">Assam</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Chhattisgarh">Chhattisgarh</option>
                  <option value="Goa">Goa</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Haryana">Haryana</option>
                  <option value="Himachal Pradesh">Himachal Pradesh</option>
                  <option value="Jharkhand">Jharkhand</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Manipur">Manipur</option>
                  <option value="Meghalaya">Meghalaya</option>
                  <option value="Mizoram">Mizoram</option>
                  <option value="Nagaland">Nagaland</option>
                  <option value="Odisha">Odisha</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Sikkim">Sikkim</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Telangana">Telangana</option>
                  <option value="Tripura">Tripura</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="Uttarakhand">Uttarakhand</option>
                  <option value="West Bengal">West Bengal</option>
                  <option value="Andaman and Nicobar Islands">
                    Andaman and Nicobar Islands
                  </option>
                  <option value="Chandigarh">Chandigarh</option>
                  <option value="Dadra and Nagar Haveli and Daman and Diu">
                    Dadra and Nagar Haveli and Daman and Diu
                  </option>
                  <option value="Lakshadweep">Lakshadweep</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Puducherry">Puducherry</option>
                  <option value="Ladakh">Ladakh</option>
                  <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                </select>
              </div>
              <div className="mb-5 w-full">
                <select
                  name="country"
                  value={userData.country || ''}
                  onChange={handleUserDataChange}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white px-6 py-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                >
                  <option value="">Select</option>
                  <option value="IND">India</option>
                  <option value="USA">United States</option>
                </select>
              </div>
            </>
          )}
          {isNewAddress && (
            <button
              className={`flex h-11 w-1/2 items-center justify-center rounded-lg px-4 text-base text-white shadow-md shadow-black ${
                isDisabled
                  ? 'cursor-not-allowed bg-primary-light'
                  : 'cursor-pointer bg-primary'
              }`}
              type="submit"
            >
              {loading ? (
                <VscLoading className="animate-spin" />
              ) : (
                'Add New Address'
              )}
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default OrderAddressPage;
