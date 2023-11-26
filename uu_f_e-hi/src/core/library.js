import { useState, Utils } from "uu5g05";
import Uu5Elements from "uu5g05-elements";
import Uu5Forms from "uu5g05-forms";
import Book from "./book";
import AddBook from "./add-book";
import Config from "./config/config";

const INITIAL_BOOK_LIST = [
  { id: Utils.String.generateId(), name: "Neznámý cizinec", author: "Mark Twain" },
  { id: Utils.String.generateId(), name: "Romeo a Julie", author: "William Shakespeare" },
];

function Library(props) {
  const [bookList, setBookList] = useState(INITIAL_BOOK_LIST);

  const [modalOpen, setModalOpen] = useState(false);

  function handleDelete(id) {
    setBookList(([...actualBookList]) => {
      const index = actualBookList.findIndex((item) => item.id === id);
      actualBookList.splice(index, 1);
      return actualBookList;
    });
  }

  function addBook(data) {
    // save new data
    setBookList(([...actualBookList]) => {
      actualBookList.push({ ...data, id: Utils.String.generateId() });
      return actualBookList;
    });
  }

  function handleSubmit(e) {
    const data = e.data.value;

    addBook(data);

    setModalOpen(false);
  }

  return (
    <Uu5Elements.Block
      header="Library"
      headerType="title"
      actionList={[{ icon: "uugds-plus", onClick: () => setModalOpen(true) }]}
    >
      <Uu5Elements.Grid className={Config.Css.css({ width: 400, maxWidth: "100%" })}>
        {bookList.map((item) => (
          <Book key={item.id} {...item} onDelete={() => handleDelete(item.id)} />
        ))}
        <AddBook key={bookList.length} onAdd={addBook} />
      </Uu5Elements.Grid>

      <Uu5Forms.Form.Provider key={modalOpen} onSubmit={handleSubmit}>
        <Uu5Elements.Modal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          header="Create book"
          footer={
            <div>
              <Uu5Forms.CancelButton />
              <Uu5Forms.SubmitButton />
            </div>
          }
        >
          <Uu5Forms.FormText name="name" label="Name" />
          <Uu5Forms.FormText name="author" label="Author" />
        </Uu5Elements.Modal>
      </Uu5Forms.Form.Provider>
    </Uu5Elements.Block>
  );
}

export default Library;
