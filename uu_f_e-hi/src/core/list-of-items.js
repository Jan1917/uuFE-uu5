import { useState, Utils } from "uu5g05";
import Uu5Elements from "uu5g05-elements";
import Uu5Forms from "uu5g05-forms";
import Item from "./item";
import AddItem from "./add-item";
import Config from "./config/config";

const INITIAL_LIST_OF_ITEMS = [
  { id: Utils.String.generateId(), name: "cukr", price: "9.90" },
  { id: Utils.String.generateId(), name: "mléko trvanlivé", price: "14.90" },
];

function ListOfItems(props) {
  const [ListOfItems, setListOfItems] = useState(INITIAL_LIST_OF_ITEMS);

  const [modalOpen, setModalOpen] = useState(false);

  function handleDelete(id) {
    setListOfItems(([...actualListOfItems]) => {
      const index = actualListOfItems.findIndex((item) => item.id === id);
      actualListOfItems.splice(index, 1);
      return actualListOfItems;
    });
  }

  function addItem(data) {
    // save new data
    setListOfItems(([...actualListOfItems]) => {
      actualListOfItems.push({ ...data, id: Utils.String.generateId() });
      return actualListOfItems;
    });
  }

  function handleSubmit(e) {
    const data = e.data.value;

    addItem(data);

    setModalOpen(false);
  }

  return (
    <Uu5Elements.Block
      header="List of Items"
      headerType="title"
      actionList={[{ icon: "uugds-plus", onClick: () => setModalOpen(true) }]}
    >
      <Uu5Elements.Grid className={Config.Css.css({ width: 800, maxWidth: "100%" })}>
        {ListOfItems.map((item) => (
          <Item key={item.id} {...item} onDelete={() => handleDelete(item.id)} />
        ))}
        <AddItem key={ListOfItems.length} onAdd={addItem} />
      </Uu5Elements.Grid>

      <Uu5Forms.Form.Provider key={modalOpen} onSubmit={handleSubmit}>
        <Uu5Elements.Modal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          header="Add item"
          footer={
            <div>
              <Uu5Forms.CancelButton />
              <Uu5Forms.SubmitButton />
            </div>
          }
        >
          <Uu5Forms.FormText name="name" label="Name" />
          <Uu5Forms.FormText name="price" label="Price" />
        </Uu5Elements.Modal>
      </Uu5Forms.Form.Provider>
    </Uu5Elements.Block>
  );
}

export default ListOfItems;
