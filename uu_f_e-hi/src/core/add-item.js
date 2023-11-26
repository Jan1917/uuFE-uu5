import { useState } from "uu5g05";
import Uu5Elements from "uu5g05-elements";
import Uu5Forms from "uu5g05-forms";

function AddItem(props) {
  const [name, setName] = useState();
  const [price, setPrice] = useState();

  return (
    <Uu5Elements.ListItem
      actionList={[{ icon: "uugds-plus", onClick: () => name && price && props.onAdd({ name, price }) }]}
    >
      <Uu5Forms.Text.Input
        value={name}
        onChange={(e) => setName(e.data.value)}
        placeholder="Name"
        significance="subdued"
      />
      <Uu5Forms.Text.Input
        value={price}
        onChange={(e) => setPrice(e.data.value)}
        placeholder="Price"
        significance="subdued"
      />
    </Uu5Elements.ListItem>
  );
}

export default AddItem;
