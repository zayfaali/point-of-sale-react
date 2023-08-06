import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const host = "https://62hcd7-5000.csb.app";

export const AdminContext = createContext({
  setCurrentAdmin: () => null,
  currentAdmin: null,
});

export const AdminProvider = ({ children }) => {
  const navigate = useNavigate();
  const [currentAdmin, setCurrentAdmin] = useState(null);

  const loginAdmin = async (loginData) => {
    const apiUrl = `${host}/api/adminauth/loginadmin`;

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      const json = await response.json();
      console.log(json);
      setCurrentAdmin(json.authtoken);
      if (json.authtoken) {
        navigate("/stores");
      }
    } catch (error) {
      console.error("Error submitting form:", error.message);
    }
  };

  const value = { currentAdmin, setCurrentAdmin, loginAdmin };
  return (
    <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
  );
};
