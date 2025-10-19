// Data structure for the 5 products: round plates, round compartment plates,
// square compartment tray, round bowls, square bowls.
// Each product has: id, slug, title, description, hero image, gallery, and variants.
import RoundPlates from "../assets/product_details/round_plates/round_plates.png";
import RoundCompartment from "../assets/product_details/round_compartment_plates/round_compartment_plates.png";
import SquareCompartment from "../assets/product_details/square_compartment_trays/square_trays.png";
import RoundBowls from "../assets/product_details/round_bowls/round_bowl.png";
import SquareBowls from "../assets/product_details/square_bowls/square_bowls.png";
const products = [
  {
    id: "round-plates",
    slug: "round-plates",
    title: "Round Plates",
    description:
      "Classic round bagasse plates — multiple diameters for different meal sizes.",
    hero: RoundPlates,
    gallery: [
      "/assets/product_details/round_plates/round_plate_12_11_10.jpg",
      "/assets/product_details/round_plates/round_plates_detail.jpg",
    ],
    variants: [
      {
        label: "12 inch",
        diameter_mm: 302,
        depth_mm: 24,
        label_short: '12"',
        sku: "RP-12",
      },
      {
        label: "11 inch",
        diameter_mm: 280,
        depth_mm: 23,
        label_short: '11"',
        sku: "RP-11",
      },
      {
        label: "10 inch",
        diameter_mm: 255,
        depth_mm: 23,
        label_short: '10"',
        sku: "RP-10",
      },
      {
        label: "9 inch",
        diameter_mm: 225,
        depth_mm: 18,
        label_short: '9"',
        sku: "RP-09",
      },
      {
        label: "7 inch",
        diameter_mm: 175,
        depth_mm: 19.5,
        label_short: '7"',
        sku: "RP-07",
      },
      {
        label: "6 inch",
        diameter_mm: 151,
        depth_mm: 18,
        label_short: '6"',
        sku: "RP-06",
      },
    ],
  },

  {
    id: "round-compartment-plates",
    slug: "round-compartment-plates",
    title: "Round Compartment Plates",
    description:
      "Compartment plates (3CP & 4CP) — great for meals with separate portions.",
    hero: RoundCompartment,
    gallery: [
      "/assets/round-compartment-3cp.jpg",
      "/assets/round-compartment-4cp.jpg",
    ],
    variants: [
      // 3CP
      {
        family: "3CP",
        label: "10 inch",
        diameter_mm: 255,
        depth_mm: 25.3,
        sku: "RCP3-10",
      },
      {
        family: "3CP",
        label: "9 inch",
        diameter_mm: 225,
        depth_mm: 20,
        sku: "RCP3-09",
      },

      // 4CP
      {
        family: "4CP",
        label: "12 inch",
        diameter_mm: 302,
        depth_mm: 25.5,
        sku: "RCP4-12",
      },
      {
        family: "4CP",
        label: "11 inch",
        diameter_mm: 280,
        depth_mm: 25.5,
        sku: "RCP4-11",
      },
    ],
  },

  {
    id: "square-compartment-tray",
    slug: "square-compartment-tray",
    title: "Square Compartment Plate / Tray",
    description: "Square compartment tray for plated meals and packed meals.",
    hero: SquareCompartment,
    gallery: ["/assets/square-compartment-1.jpg"],
    variants: [
      {
        label: "Square Plate - 3CP",
        area_mm: { w: 215, h: 215 },
        depth_mm: 24,
        sku: "SQ-3CP",
      },
    ],
  },

  {
    id: "round-bowls",
    slug: "round-bowls",
    title: "Round Bowls",
    description: "Round bowls in multiple capacities — from 120ml to 650ml.",
    hero: RoundBowls,
    gallery: ["/assets/round-bowls-gallery.jpg"],
    variants: [
      { capacity_ml: 650, diameter_mm: 155, depth_mm: 65, sku: "RB-650" },
      { capacity_ml: 500, diameter_mm: 155, depth_mm: 54, sku: "RB-500" },
      { capacity_ml: 350, diameter_mm: 151, depth_mm: 41, sku: "RB-350" },
      { capacity_ml: 240, diameter_mm: 134, depth_mm: 39, sku: "RB-240" },
      { capacity_ml: 210, diameter_mm: 115, depth_mm: 38, sku: "RB-210" },
      { capacity_ml: 180, diameter_mm: 107, depth_mm: 40, sku: "RB-180" },
      { capacity_ml: 120, diameter_mm: 88, depth_mm: 33, sku: "RB-120" },
    ],
  },

  {
    id: "square-bowls",
    slug: "square-bowls",
    title: "Square Bowls",
    description:
      "Square bowls (rectangular area) — available in 750ml, 650ml and 500ml sizes.",
    hero: SquareBowls,
    gallery: ["/assets/square-bowls-1.jpg"],
    variants: [
      {
        capacity_ml: 750,
        area_mm: { w: 173, h: 120 },
        depth_mm: 65,
        sku: "SQB-750",
      },
      {
        capacity_ml: 650,
        area_mm: { w: 173, h: 120 },
        depth_mm: 55,
        sku: "SQB-650",
      },
      {
        capacity_ml: 500,
        area_mm: { w: 173, h: 120 },
        depth_mm: 40,
        sku: "SQB-500",
      },
    ],
  },
];

export default products;
