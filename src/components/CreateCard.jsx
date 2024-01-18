export default function CreateCard() {
  return <div style={styles.card}>
    <h1>create a card</h1>
    <div>
      <input type="text" placeholder="name"/> <br /><br />
      <input type="text" placeholder="decription"/>
    </div>
  </div>
}

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
}