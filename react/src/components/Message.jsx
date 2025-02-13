const Message = ({msg, bgColor}) => {
  let styles = {
    padding: "1rem",
    marginBottom: "1rem",
    textAlign: "center",
    color: "#ffffff",
    fontWeight: "bold",
    width: "100%",
    backgroundColor: bgColor,
  }

  return (
    <div className="message">
      <div style={styles}>
        <h3>{msg}</h3>
      </div>
    </div>
  );
};

export default Message;
