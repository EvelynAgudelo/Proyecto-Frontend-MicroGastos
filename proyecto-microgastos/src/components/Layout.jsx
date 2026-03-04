import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div style= {{display: "flex", flexDirection:"column", minHeight: "100vh"}}>
      <Navbar />
      <main style={{flex: 1, padding: "20px", backgroundColor: "#f4f6f9"}}>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout; 
