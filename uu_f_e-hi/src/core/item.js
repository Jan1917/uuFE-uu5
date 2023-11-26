import Uu5Elements from "uu5g05-elements";

function Item(props) {
  return (
    <Uu5Elements.ListItem actionList={[{ icon: "uugds-close", onClick: props.onDelete }]}>
      {props.name}
      {props.price}
    </Uu5Elements.ListItem>
  );
}

export default Item;
