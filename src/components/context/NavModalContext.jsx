import { useState, createContext, useContext } from "react";

const ModalContext = createContext();

export function useNavModal() {
  return useContext(ModalContext);
}

export function ModalProvider({ children }) {
  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }
  const toggle = () => setOpenModal((prev) => !prev);

  return (
    <ModalContext.Provider
      value={{ toggle, handleChange, formData, openModal }}
    >
      {children}
    </ModalContext.Provider>
  );
}
