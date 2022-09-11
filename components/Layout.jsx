import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Nav />
      {children}
      <p>foooter section</p>
    </div>
  );
};

export default Layout;
