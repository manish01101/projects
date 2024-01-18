import { useNavigate } from "react-router-dom";

export default function Appbar() {
  const navigate = useNavigate();
  return (
    <div style={styles.appbar}>
      <div>Business Card App</div>
      <div style={styles.nav}>
        <button  style={styles.btn}
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </button>
        <button style={styles.btn}
          onClick={() => {
            navigate("/createcard");
          }}
        >
          New Card
        </button>
        <button style={styles.btn}
          onClick={() => {
            navigate("/carddetails");
          }}
        >
          Card Details
        </button>
      </div>
    </div>
  );
}

const styles = {
  appbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: 'center',
    padding: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#99f",
    
  },
  nav: {
    display: "flex",
    justifyContent: "space-around",
  },
  btn: {
    textDecoration: "none",
    color: "#66f",
    padding: "7px 9px",
    backgroundColor: "#fff",
    display: "inline-block",
    margin: "8px",
    border: 'none',
    borderRadius: '5px',
    fontSize: '15px'
  }
};
