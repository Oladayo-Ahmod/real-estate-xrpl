const Property = require('../models/Property');
const xrpl = require('xrpl');

exports.addProperty = async (req, res) => {
  const { title, description, price } = req.body;
  try {
    const property = new Property({ title, description, price, owner: req.user.id });
    await property.save();
    res.status(201).json({ message: 'Property added successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.verifyProperty = async (req, res) => {
  const { propertyId } = req.body;
  try {
    const property = await Property.findById(propertyId);
    if (!property) {
      return res.status(404).json({ message: 'Property not found' });
    }
    property.verified = true;
    await property.save();
    res.json({ message: 'Property verified' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.tokenizeProperty = async (req, res) => {
    const { propertyId } = req.body;
    try {
      const property = await Property.findById(propertyId);
      if (!property || !property.verified) {
        return res.status(400).json({ message: 'Property not found or not verified' });
      }
  
      const client = new xrpl.Client('wss://s.altnet.rippletest.net:51233');
      await client.connect();
  
      const wallet = xrpl.Wallet.fromSeed(process.env.XRP_SEED);
  
      const tx = await client.submitAndWait({
        TransactionType: 'NFTokenMint',
        Account: wallet.classicAddress,
        NFTokenTaxon: 0, 
        URI: xrpl.convertStringToHex(JSON.stringify({
          propertyId: property._id,
          title: property.title,
          description: property.description,
          price: property.price,
        })),
        Flags: 8, // Set to allow burning
      }, { wallet });
      
      property.tokenId = tx.result.hash;
      await property.save();
  
      client.disconnect();
  
      res.json({ message: 'Property tokenized', tokenId: property.tokenId });
    } catch (error) {
      res.status(500).json({ message: `${error} Server error` });
    }
  };
