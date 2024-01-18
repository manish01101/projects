export default function Card(props) {
  return (
    <div style={styles.card}>
      <div style={styles.name}>{props.user.name}</div>
      <div style={styles.description}>{props.user.description}</div>

      {/* INTEREST */}
      <div style={styles.interestsHeader}>Interests</div>
      <div style={styles.interestsList}>
        {props.user.interest.map((item) => {
          return (
            <div style={styles.interestItem} key={item}>
              {item}
            </div>
          );
        })}
      </div>

      {/* SOCIAL HANDLE */}
      <div style={styles.socialLinks}>
        {props.user.socialHandle.map((h) => {
          return (
            <button
              style={styles.link}
              onClick={(e) => {
                e.preventDefault();
                window.location.href = h.link;
              }}
              key={Math.floor(Math.random() * 100000)}
            >
              {h.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// Styles
const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "20px",
    margin: "20px",
    maxWidth: "400px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#f8f9fa",
  },
  name: {
    fontSize: "24px",
    marginBottom: "10px",
    color: "#333",
  },
  description: {
    fontSize: "16px",
    color: "#555",
    marginBottom: "15px",
  },
  link: {
    textDecoration: "none",
    color: "#fff",
    padding: "10px 15px",
    borderRadius: "5px",
    backgroundColor: "#007BFF",
    display: "inline-block",
    margin: "10px",
    marginLeft: '0',
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  interessocialLinks: {
    display: "flex",
    marginBottom: "15px",
  },
  tsHeader: {
    fontSize: "18px",
    marginBottom: "10px",
    color: "#333",
  },
  interestsList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  interestItem: {
    fontSize: "14px",
    marginBottom: "5px",
    color: "#555",
  },
};
