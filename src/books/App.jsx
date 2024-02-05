import { favouriteBooks } from './list';
import BookList from './Books';

const App = () => {
  return (
    <>
      <h1>Books of the week</h1>
      <BookList books={favouriteBooks} />
    </>
  );
};

export default App;