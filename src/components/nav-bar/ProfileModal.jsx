import { useNavModal } from "../context/NavModalContext";

export default function Modal(props) {
  const { toggle, handleChange, formData, openModal } = useNavModal();

  return (
    <>
      {openModal ? (
        <div>
          <dialog className="modalContainer">
            <form formMethod="dialog">
              <h1>Account Information</h1>

              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                onChange={handleChange}
                value={formData.firstName}
              />
              <br />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                onChange={handleChange}
                value={formData.lastName}
              />
              <br />
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                value={formData.email}
              />
              <br />
              <input
                type="number"
                name="phone"
                placeholder="Phone Number"
                onChange={handleChange}
                value={formData.phone}
              />
              <br />
              <input
                type="text"
                name="address"
                placeholder="Address"
                onChange={handleChange}
                value={formData.address}
              />
              <br />
              <button className="modalButton" formMethod="dialog">
                Save
              </button>
              <button className="modalButton" onClick={toggle}>
                Close
              </button>
            </form>
          </dialog>
        </div>
      ) : null}
    </>
  );
}
