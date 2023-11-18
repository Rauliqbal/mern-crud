import axios from "axios";
import { Table } from "flowbite-react";
import { useEffect, useState } from "react";

export default function ListProduct() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async() => {
    try {
      const response = await axios.get("http://localhost:8080/api");
      setProducts(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  const deleteProduct = async(id) => {
    try {
      await axios.delete(`http://localhost:8080/api/${id}`)
      getProducts()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Table>
      <Table.Head>
        <Table.HeadCell>No</Table.HeadCell>
        <Table.HeadCell>Product name</Table.HeadCell>
        <Table.HeadCell>Description</Table.HeadCell>
        <Table.HeadCell>Price</Table.HeadCell>
        <Table.HeadCell>
         Action
        </Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
        {products.map((product,index) => {
          return (
            <Table.Row key={product._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell>{index + 1}</Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {product.title}
              </Table.Cell>
              <Table.Cell>{product.description}</Table.Cell>
              <Table.Cell>Rp. {product.price.toLocaleString(navigator.language)}</Table.Cell>
              <Table.Cell className="flex gap-4">
                <a
                  href="#"
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  Edit
                </a>

                <button
                  onClick={()=> {deleteProduct(product._id)}}
                  className="font-medium text-red-600 hover:underline dark:text-red-500"
                >
                  Delete
                </button>
              </Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
}
