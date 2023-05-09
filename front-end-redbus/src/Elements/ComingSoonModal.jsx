import React from "react";
import Modal from "react-modal";

const ComingSoonModal = ({ isOpen, setIsOpen }) => {
  // test comment
  return (
    <div>
      <Modal
        isOpen={isOpen}
        shouldCloseOnOverlayClick={true}
        style={{
          overlay: {
            backgroundColor: "rgba(212, 195, 195, 0.329)",
          },
          content: {
            color: "orange",
            height: "400px",
            width: "600px",
            left: "30vw",
            top: "20vh",
            textAlign: "center",
            backgroundColor: "#D84F57",
            border: "none",
            borderRadius: "5px",
          },
        }}
      >
        <img
          src="https://th.bing.com/th/id/OIP.u3Yv5aOx_gcwu1I_Q_xQbwHaEK?w=293&h=180&c=7&o=5&dpr=1.25&pid=1.7"
          alt="coming soon"
          style={{ width: "100%", borderRadius: "5px" }}
          height="290px"
        />
        <button
          style={{
            backgroundColor: "black",
            color: "white",
            width: "100px",
            height: "35px",
            border: "none",
            borderRadius: "5px",
            marginTop: "30px",
            cursor: "pointer",
          }}
          onClick={() => setIsOpen(false)}
        >
          Close
        </button>
      </Modal>
    </div>
  );
};

export default ComingSoonModal;
