import React, { useEffect, useState } from "react";
import Styles from "./productDetails.module.css";
import "./productDetails.css";
import products from "../../data/products";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const ProductDetails = () => {
  const [productList, setProductList] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState("all-products");
  const [animate, setAnimate] = useState(false);
  const [expanded, setExpanded] = useState({}); // mobile expand state per product

  // Per-product selected variant (object keyed by product id)
  const [selectedVariant, setSelectedVariant] = useState({});

  // Detect mobile/tablet
  const [isMobileOrTab, setIsMobileOrTab] = useState(false);
  useEffect(() => {
    const checkDevice = () => setIsMobileOrTab(window.innerWidth <= 1024);
    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  // initialize selectedVariant when productList changes (choose first variant)
  useEffect(() => {
    const initial = {};
    productList.forEach((p) => {
      if (p.variants && p.variants.length > 0) {
        initial[p.id] = p.variants[0];
      }
    });
    setSelectedVariant((prev) => ({ ...initial, ...prev }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productList]);

  const toggleExpand = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const collapseAll = () => setExpanded({});

  const handleShowCategory = (category) => {
    setAnimate(true);
    setSelectedCategory(category);
    collapseAll();

    setTimeout(() => {
      switch (category) {
        case "all-products":
          setProductList(products);
          break;
        case "plates":
          setProductList(
            products.filter((p) =>
              ["round-plates", "round-compartment-plates"].includes(p.id)
            )
          );
          break;
        case "bowls":
          setProductList(
            products.filter((p) =>
              ["round-bowls", "square-bowls"].includes(p.id)
            )
          );
          break;
        case "square-trays":
          setProductList(
            products.filter((p) => ["square-compartment-tray"].includes(p.id))
          );
          break;
        default:
          setProductList(products);
      }
      setAnimate(false);
    }, 300);
  };

  // set selected variant for a product
  const setVariantForProduct = (productId, variant) => {
    setSelectedVariant((prev) => ({ ...prev, [productId]: variant }));
  };

  const renderVariantButtons = (p) => {
    if (!p.variants || p.variants.length === 0) return null;

    return (
      <div className={Styles.variantTabs}>
        {p.variants.map((v, i) => {
          // label to show: prefer label_short then label or capacity
          const label =
            v.label ?? (v.capacity_ml ? `${v.capacity_ml} ml` : `v${i + 1}`);
          const active =
            selectedVariant[p.id] && selectedVariant[p.id].sku === v.sku;

          return (
            <button
              key={i}
              className={`${Styles.variantTabBtn} ${
                active ? Styles.variantTabBtnActive : ""
              }`}
              onClick={() => setVariantForProduct(p.id, v)}
              aria-pressed={active}
            >
              {label}
            </button>
          );
        })}
      </div>
    );
  };

  const renderVariantDetails = (p) => {
    const v = selectedVariant[p.id];
    if (!v) return null;

    // Build list of rows to show in consistent order
    const rows = [];
    if (v.diameter_mm)
      rows.push({ label: "Diameter", value: `${v.diameter_mm} mm` });
    if (v.depth_mm) rows.push({ label: "Depth", value: `${v.depth_mm} mm` });
    if (v.capacity_ml)
      rows.push({ label: "Capacity", value: `${v.capacity_ml} ml` });
    if (v.area_mm)
      rows.push({ label: "Area", value: `${v.area_mm.w} × ${v.area_mm.h} mm` });
    if (v.sku) rows.push({ label: "SKU", value: v.sku });

    return (
      <div className={Styles.detailsBox}>
        {rows.map((r, idx) => (
          <div key={idx} className={Styles.detailsRow}>
            <span className={Styles.detailsLabel}>{r.label}</span>
            <span className={Styles.detailsValue}>{r.value}</span>
          </div>
        ))}
      </div>
    );
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
      {isMobileOrTab ? (
        <div>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            className="swiper-container"
            onSlideChange={() => {
              collapseAll();
            }}
          >
            <div
              className={`${Styles.productlist_mobile} ${
                animate ? "fade-out" : "fade-in"
              }`}
            >
              {productList?.map((p, index) => (
                <SwiperSlide className="swiper-slide" key={p.id}>
                  <div
                    className={`${Styles.productCard} fade-stagger`}
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    <div className={Styles.productHero}>
                      <img src={p.hero} alt={p.title} />
                    </div>

                    <div className={Styles.productInfo_mobile}>
                      <h3>{p.title}</h3>
                      <p className={Styles.productDesc}>{p.description}</p>

                      {/* Mobile: Show/hide full variants list if needed */}
                      <button
                        className={`${Styles.showMoreBtn} ${
                          expanded[p.id] ? Styles.showMoreBtnActive : ""
                        }`}
                        onClick={() => toggleExpand(p.id)}
                      >
                        {expanded[p.id]
                          ? "Hide all variants"
                          : "Show all variants"}
                      </button>

                      <div
                        className={`${Styles.variantsWrapper} ${
                          expanded[p.id] ? Styles.expand : Styles.collapse
                        }`}
                      >
                        {/* Variant selector (mobile) */}
                        {renderVariantButtons(p)}

                        {/* Single details box (shared fields) */}
                        {renderVariantDetails(p)}
                        {/* <div className={Styles.variants}>
                          {p.variants.map((v, i) => (
                            <div key={i} className={Styles.variant}>
                              <div className={Styles.variantTitle}>
                                {v.label ??
                                  (v.capacity_ml
                                    ? `${v.capacity_ml} ml`
                                    : `Variant`)}
                              </div>
                              <ul className={Styles.variantMeasures}>
                                {v.diameter_mm && (
                                  <li>Dia: {v.diameter_mm} mm</li>
                                )}
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
                        </div> */}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      ) : (
        <div
          className={`${Styles.productList} ${
            animate ? "fade-out" : "fade-in"
          }`}
        >
          {productList?.map((p, index) => (
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

                {/* Variant selector (desktop) */}
                {renderVariantButtons(p)}

                {/* Single details box (shared fields) */}
                {renderVariantDetails(p)}

                {/* Desktop: show all variants grid as before */}
                {/* <div className={Styles.variants}>
                  {p.variants.map((v, i) => (
                    <div key={i} className={Styles.variant}>
                      <div className={Styles.variantTitle}>
                        {v.label ??
                          (v.capacity_ml ? `${v.capacity_ml} ml` : `Variant`)}
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
                </div> */}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
