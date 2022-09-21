const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    const tagData = await Tag.findAll({

    include: [
      {
        model: Product,
        as: "products"
      }
    ]
  })

  console.log(tagData)
  return res.json(tagData)

  }
  
  catch (err) {
    console.log(err)
  }

});

router.get('/:id', async (req, res) => {
  try {
 const tagDataID = await Tag.findByPk(
    req.params.id, {
    include: [
      {
        model: Product,
        as: "products"
      }
    ]
  })
  
  console.log(tagDataID)
  return res.json(tagDataID)

  }

  catch (err) {
    console.log(err)
  }

});

router.post('/', async (req, res) => {
  try {
    const newTagData = await Tag.create({

        tag_name: req.body.tag_name

      })

      console.log(newTagData)

      return res.json(newTagData)
  }
  
  catch (err) {
    console.log(err)
  }

});

router.put('/:id', async (req, res) => {
  try {
    const updateTagData = await Tag.update(
        req.body, {

        where: {

          id: req.params.id

        }

      })

      console.log(updateTagData)

      return res.json(updateTagData)
  }

  catch (err) {
    console.log(err)
  }

});

router.delete('/:id', async (req, res) => {
  try {
    const deleteTagData = await Tag.destroy({

        where: {

          id: req.params.id

        }

      })

      console.log(deleteTagData)

      return res.json(deleteTagData)
  }

  catch (err) {
    console.log(err)
  }

});

module.exports = router;
