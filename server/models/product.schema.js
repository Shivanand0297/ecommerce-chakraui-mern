import mongoose from "mongoose";
const {Schema} = mongoose;

const reviewSchema = Schema(
  {
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    // Note:
    user: { 
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    }
  },
  {
    timestamps: true 
  }
)


const productSchema = Schema(
  {
    name: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    brand: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true,
      default: 0
    },
    description: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    reviews: [reviewSchema],
    noOfReviews: {
      type: Number,
      required: true,
      default: 0
    },
    rating: {
      type: Number,
      required: true,
      default: 0
    },
    stock: {
      type: Number,
      required: true,
      default: 0
    },
    productIsNew: {
      type: Boolean,
      default: false
    }

  },
  {
    timestamps: true
  }
)

const Product = mongoose.model("Product", productSchema);
export default Product;