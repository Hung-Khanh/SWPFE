import { useState, useEffect } from "react";
import { useUpdateProfile } from "@/auth/hook/useUpdateHook"; // Hook for updating the profile
import { useUsers } from "@/auth/hook/useUsers"; // Hook for fetching user data
import { showToast } from "@/utils/toast"; // Toast utility for notifications

export const ProfileMyInfo = () => {
  //   const { user, isLoading, error } = useUsers(); // Fetch user info
  //   const { updateProfile, isPending } = useUpdateProfile(); // Hook to update profile

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    gender: "", // Added gender field
  });

  //   useEffect(() => {
  //     if (user) {
  //       setFormData({
  //         firstName: user.first_name || "",
  //         lastName: user.last_name || "",
  //         email: user.email || "",
  //         phone: user.phone || "",
  //         address: user.address || "", // Assuming user has an address field
  //         gender: user.gender || "", // Assuming user has a gender field
  //       });
  //     }
  //   }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateProfile(formData); // Call the updateProfile function
      showToast.success("Profile updated successfully!");
    } catch (error) {
      console.error("Update profile error:", error);
      showToast.error("Failed to update profile. Please try again.");
    }
  };

  //   if (isLoading) {
  //     return <div>Loading...</div>; // Show loading state while fetching user info
  //   }

  //   if (error) {
  //     return <div>Error: {error}</div>; // Show error message if fetching fails
  //   }

  return (
    <div className="tab-cont" id="profile-tab_1">
      <form onSubmit={handleSubmit}>
        <div className="box-field">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <div className="box-field">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <div className="box-field">
          <label>Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            className="form-control"
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
            <option value="prefer-not-to-say">Prefer not to say</option>
          </select>
        </div>
        <div className="box-field">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <div className="box-field">
          <label>Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <div className="box-field">
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        {/* <button type="submit" className="btn" disabled={isPending}>
          {isPending ? "Saving..." : "Save Changes"}
        </button> */}
        <button type="submit" className="btn">
          Save Changes
        </button>
      </form>
    </div>
  );
};
