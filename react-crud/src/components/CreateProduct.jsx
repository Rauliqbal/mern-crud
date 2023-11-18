import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { Label, TextInput } from "flowbite-react";
import axios from "axios";

export default function CreateProduct() {
  const [openModal, setOpenModal] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const createdProduct = async () => {
    try {
      await axios.post("http://localhost:8080/api", {
        title,
        description,
        price,
      });
      setOpenModal(false)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Button onClick={() => setOpenModal(true)}>Create</Button>
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Add New Product</Modal.Header>
        <form onSubmit={createdProduct}>
          <Modal.Body>
            <div className="space-y-6">
              <div className="flex max-w-md flex-col gap-4">
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="small" value="Title Product" />
                  </div>
                  <TextInput
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    id="small"
                    type="text"
                    sizing="sm"
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="base" value="Price" />
                  </div>
                  <TextInput
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    id="base"
                    type="number"
                    sizing="md"
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="large" value="Description" />
                  </div>
                  <TextInput
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    id="large"
                    type="text"
                    sizing="lg"
                  />
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit">I accept</Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}
