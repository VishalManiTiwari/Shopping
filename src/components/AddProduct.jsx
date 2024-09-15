import React, { useState } from 'react';

const AddProduct = ({ onAddProduct }) => {
  const [showForm, setShowForm] = useState(false);
  const [newProduct, setNewProduct] = useState({
    title: '',
    price: '',
    description: '',
    image: '',
    category: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProduct(newProduct)
      .then(() => {
       
      })
      .catch(error => {
        toast.error('Error adding product.');
        console.error('Error adding product:', error);
      });
  };

  return (
    <div className="mb-6 relative  p-4 border border-gray-300 rounded-lg shadow-lg">
      <button
        onClick={() => setShowForm(!showForm)}
        className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg shadow-md transition duration-300 mb-4"
      >
        {showForm ? 'Cancel' : 'Add New Product'}
      </button>
      {showForm && (
        <form onSubmit={handleSubmit}>
          <h2 className="text-xl font-semibold mb-4">Add New Product</h2>
          <input
            type="text"
            name="title"
            value={newProduct.title}
            onChange={handleChange}
            placeholder="Title"
            className="block w-full mb-2 p-2 border border-gray-300 rounded-md"
            required
          />
          <input
            type="number"
            name="price"
            value={newProduct.price}
            onChange={handleChange}
            placeholder="Price"
            className="block w-full mb-2 p-2 border border-gray-300 rounded-md"
            required
          />
          <input
            type="text"
            name="description"
            value={newProduct.description}
            onChange={handleChange}
            placeholder="Description"
            className="block w-full mb-2 p-2 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            name="image"
            value={newProduct.image}
            onChange={handleChange}
            placeholder="Image URL"
            className="block w-full mb-2 p-2 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            name="category"
            value={newProduct.category}
            onChange={handleChange}
            placeholder="Category"
            className="block w-full mb-2 p-2 border border-gray-300 rounded-md"
          />
          <button
            type="submit"
            className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg shadow-md transition duration-300"
          >
            Add Product
          </button>
        </form>
      )}
    </div>
  );
};

export default AddProduct;


