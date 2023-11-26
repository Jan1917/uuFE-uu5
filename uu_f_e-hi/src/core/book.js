import Uu5Elements from "uu5g05-elements";

function Book(props) {
  return (
    <Uu5Elements.ListItem actionList={[{ icon: "uugds-close", onClick: props.onDelete }]}>
      {props.name}
    </Uu5Elements.ListItem>
  );
}

export default Book;
