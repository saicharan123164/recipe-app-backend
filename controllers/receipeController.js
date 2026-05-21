import Recipe from "../models/RecipeModel.js";


// ================= GET ALL RECIPES =================

export const getReceipes = async (req, res) => {

    try {

        const recipes = await Recipe.find()
            .populate("userPrepared", "_id name");

        res.status(200).json(recipes);

    } catch (err) {

        console.log(err);

        res.status(500).json({
            message: "Error Fetching Recipes"
        });
    }
};
// ================= GET RECIPE BY ID =================
export const getReceipeById = async (req, res) => {

    try {

        const recipe = await Recipe.findById(req.params.id)
            .populate("userPrepared", "_id name");

        if (!recipe) {

            return res.status(404).json({
                message: "Recipe Not Found"
            });
        }

        res.status(200).json(recipe);

    } catch (err) {

        console.log(err);

        res.status(500).json({
            message: "Error Fetching Recipe"
        });
    }
};

// ================= ADD RECIPE =================
export const addReceipe = async (req, res) => {

    try {

        const {
            name,
            ingredients,
            preparationTime,
            category
        } = req.body;

        const recipe = await Recipe.create({

            name,
            ingredients,
            preparationTime,
            category,

            // Logged In User ID
            userPrepared: req.user.id
        });

        res.status(201).json({
            message: "Recipe Added Successfully",
            recipe
        });

    } catch (err) {

        console.log(err);

        res.status(500).json({
            message: "Error Adding Recipe",
            error: err.message
        });
    }
};
// ================= UPDATE RECIPE =================
export const updateReceipe = async (req, res) => {

    try {

        const recipe = await Recipe.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!recipe) {

            return res.status(404).json({
                message: "Recipe Not Found"
            });
        }

        res.status(200).json({
            message: "Recipe Updated Successfully",
            recipe
        });

    } catch (err) {

        res.status(500).json({
            message: "Error Updating Recipe"
        });
    }
};


// ================= DELETE RECIPE =================
export const deleteReceipe = async (req, res) => {

    try {

        const recipe = await Recipe.findByIdAndDelete(req.params.id);

        if (!recipe) {

            return res.status(404).json({
                message: "Recipe Not Found"
            });
        }

        res.status(200).json({
            message: "Recipe Deleted Successfully"
        });

    } catch (err) {

        res.status(500).json({
            message: "Error Deleting Recipe"
        });
    }
};