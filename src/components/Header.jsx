function Header({ title, identity }) {
  // const styles = {
  //   width: "100%",
  //   color: "black",
  // };
  return (
    <div className="header">
      <h1 className={identity}>{title}</h1>
      <hr />
    </div>
  );
}

export default Header;
