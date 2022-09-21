const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async(req, res) => {
  try{
    const categoryData = await Category.findAll({

    include: {

      model: Product,

      as: "products"
      
    }

  })

    console.log(categoryData)

    return res.json(categoryData)
  }

  catch (err) {
    console.log(err)
  }

});

router.get('/:id', async(req, res) => {
  try{
    const categoryDataID = await Category.findByPk
        (req.params.id, {

          include: {
          model: Product,
          as: 'products'

          }
        })

        console.log(categoryDataID)

        return res.json(categoryDataID)
  }

  catch (err) {
    console.log(err)
  }

});

router.post('/', async(req, res) => {
  try{
    const newCategoryData = await Category.create
      ({
        category_name: req.body.category_name
      })

      console.log(newCategoryData)

      return res.json(newCategoryData)

  }

  catch (err) {
    console.log(err)
  }

});

router.put('/:id', async(req, res) => {
  try{
    const updateCategoryData = await Category.update(
      req.body, {

        where: {

          id: req.params.id

        }

      })

      console.log(updateCategoryData)

      return res.json(updateCategoryData)
  }
  
  catch (err) {
    console.log(err)
  }

});

router.delete('/:id', async(req, res) => {
  try{
    const deleteCategoryData = await Category.destroy({

        where: {

          id: req.params.id

        }

      })

      console.log(deleteCategoryData)

      return res.json(deleteCategoryData)
  }
  
  catch (err) {
    console.log(err)
  }

});

module.exports = router;
