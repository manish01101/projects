export default function CreateCard() {
  return (
    <div style={styles.card}>
      <h1>create a card</h1>
      <div>
        <input style={styles.input} type="text" placeholder="name" /> <br />
        <br />
        <input style={styles.input} type="text" placeholder="decription" />
        <br />
        <br />
        <div>
          <div>Interests: </div>
          <input style={styles.input} type="text" placeholder="enter your interests"/>
          <button style={styles.sbtn}>Add Interest</button>
        </div>
        <br /><br />
        <div>
          <div>Add Social Handle: </div>
          <input style={styles.input} type="text" placeholder="enter platform name" />
          <br /><br />
          <input style={styles.input} type="text" placeholder="enter platform name" />
          <button style={styles.sbtn}>Add Handle</button>
        </div>
      </div>
    </div>
  );
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
  btn: {
    textDecoration: "none",
    color: "#66f",
    padding: "7px 9px",
    backgroundColor: "#fff",
    display: "inline-block",
    margin: "8px",
    border: 'solid',
    borderRadius: '5px',
    fontSize: '15px'
  },
  input: {
    padding: '0 6px',
    width: '200px',
    lineHeight: '30px',
    border: '2px solid #66f', 
    borderRadius: '5px',
  },
  sbtn: {
    backgroundColor: '#66f',
    textDecoration: "none",
    color: "#fff",
    padding: "7px 11px",
    display: "inline-block",
    margin: "8px",
    border: 'solid',
    borderRadius: '5px',
    fontSize: '15px'
  }
};
