import React, { useEffect, useState } from "react";
import Styles from "./productDetails.module.css";
import "./productDetails.css";
import products from "../../data/products";

const ProductDetails = () => {
  const [productDetails, setProductDetails] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState("all-products");
  const [animate, setAnimate] = useState(false);
  const [expanded, setExpanded] = useState({}); // track expanded state per product

  // Detect mobile/tablet
  const [isMobileOrTab, setIsMobileOrTab] = useState(false);
  useEffect(() => {
    const checkDevice = () => {
      setIsMobileOrTab(window.innerWidth <= 1024);
    };
    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  const toggleExpand = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleShowCategory = (category) => {
    setAnimate(true);

    setTimeout(() => {
      switch (category) {
        case "all-products":
          setProductDetails(products);
          break;
        case "plates":
          setProductDetails(
            products.filter((p) =>
              ["round-plates", "round-compartment-plates"].includes(p.id)
            )
          );
          break;
        case "bowls":
          setProductDetails(
            products.filter((p) =>
              ["round-bowls", "square-bowls"].includes(p.id)
            )
          );
          break;
        case "square-trays":
          setProductDetails(
            products.filter((p) => ["square-compartment-tray"].includes(p.id))
          );
          break;
        default:
          setProductDetails(products);
      }
      setSelectedCategory(category);
      setAnimate(false);
    }, 300);
  };

  return (
    <div className={Styles.productsPageWrapper}>
      <h2 className={Styles.pageTitle}>Product Details</h2>

      {/* Category Tabs */}
      <div className={Styles.categoryWrapper}>
        {["all-products", "plates", "bowls", "square-trays"].map((cat) => (
          <div
            key={cat}
            className={
              selectedCategory === cat
                ? Styles.categoryItemSelected
                : Styles.categoryItem
            }
            onClick={() => handleShowCategory(cat)}
          >
            {cat === "all-products"
              ? "All Products"
              : cat === "square-trays"
              ? "Square Trays"
              : cat.charAt(0).toUpperCase() + cat.slice(1)}
          </div>
        ))}
      </div>

      {/* Product List */}
      <div
        className={`${Styles.productList} ${animate ? "fade-out" : "fade-in"}`}
      >
        {productDetails?.map((p, index) => (
          <div
            key={p.id}
            className={`${Styles.productCard} fade-stagger`}
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className={Styles.productHero}>
              <img src={p.hero} alt={p.title} />
            </div>

            <div className={Styles.productInfo}>
              <h3>{p.title}</h3>
              <p className={Styles.productDesc}>{p.description}</p>

              {/* Mobile/Tab → Show More button */}
              {isMobileOrTab ? (
                <>
                  <button
                    className={`${Styles.showMoreBtn} ${
                      expanded[p.id] ? Styles.showMoreBtnActive : ""
                    }`}
                    onClick={() => toggleExpand(p.id)}
                  >
                    {expanded[p.id] ? "Hide" : "Show Variants"}
                  </button>

                  <div
                    className={`${Styles.variantsWrapper} ${
                      expanded[p.id] ? Styles.expand : Styles.collapse
                    }`}
                  >
                    <div className={Styles.variants}>
                      {p.variants.map((v, i) => (
                        <div key={i} className={Styles.variant}>
                          <div className={Styles.variantTitle}>
                            {v.label ??
                              (v.capacity_ml
                                ? `${v.capacity_ml} ml`
                                : "Variant")}
                          </div>
                          <ul className={Styles.variantMeasures}>
                            {v.diameter_mm && <li>Dia: {v.diameter_mm} mm</li>}
                            {v.depth_mm && <li>Depth: {v.depth_mm} mm</li>}
                            {v.capacity_ml && (
                              <li>Capacity: {v.capacity_ml} ml</li>
                            )}
                            {v.area_mm && (
                              <li>
                                Area: {v.area_mm.w} × {v.area_mm.h} mm
                              </li>
                            )}
                            {v.sku && <li>SKU: {v.sku}</li>}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                // Desktop → always show variants
                <div className={Styles.variants}>
                  {p.variants.map((v, i) => (
                    <div key={i} className={Styles.variant}>
                      <div className={Styles.variantTitle}>
                        {v.label ??
                          (v.capacity_ml ? `${v.capacity_ml} ml` : "Variant")}
                      </div>
                      <ul className={Styles.variantMeasures}>
                        {v.diameter_mm && <li>Dia: {v.diameter_mm} mm</li>}
                        {v.depth_mm && <li>Depth: {v.depth_mm} mm</li>}
                        {v.capacity_ml && <li>Capacity: {v.capacity_ml} ml</li>}
                        {v.area_mm && (
                          <li>
                            Area: {v.area_mm.w} × {v.area_mm.h} mm
                          </li>
                        )}
                        {v.sku && <li>SKU: {v.sku}</li>}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
