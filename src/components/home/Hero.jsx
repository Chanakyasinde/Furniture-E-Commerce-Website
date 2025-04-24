import { Link } from 'react-router-dom';
import heroImage from '/images/products/hero-chair.jpg'; // path relative to public folder or src

export default function Hero() {
  return (
    <section 
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100vh",
        position: "relative"
      }}
    >
      {/* Main hero text */}
      <div style={{
        position: "absolute",
        top: "30%",
        left: "5%",
        color: "white",
        fontSize: "72px",
        fontWeight: "300",
        lineHeight: "1.1"
      }}>
        Timeless<br />
        Furniture,<br />
        Made to<br />
        Last
      </div>

      {/* Explore Collection button */}
      <div style={{
        position: "absolute",
        top: "70%",
        left: "5%"
      }}>
        <Link 
          to="/products"
          style={{
            display: "inline-block",
            backgroundColor: "white",
            color: "#b45937",
            padding: "12px 24px",
            textDecoration: "none",
            fontWeight: "500",
            fontSize: "16px",
            transition: "background-color 0.3s ease"
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#f5f5f5"}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = "white"}
        >
          Explore Collection
        </Link>
      </div>
    </section>
  );
}