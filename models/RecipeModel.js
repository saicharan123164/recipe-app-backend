import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    ingredients: {
        type: [String],
        required: true
    },

    preparationTime: {
        type: Number,
        required: true
    },

    category: {
        type: String,
        required: true
    },

    userPrepared: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }

}, {
    timestamps: true
});

const Recipe = mongoose.model("Recipe", recipeSchema);

export default Recipe;