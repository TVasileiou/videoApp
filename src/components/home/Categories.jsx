import { useDispatch , useSelector } from "react-redux"
import { addItem , removeItem } from "../../context/store"

const Categories = () => {
  const dispatch = useDispatch();

  const categories = useSelector((state) => {
    return state.items;
  })

  const handleCategoriesSet = (e) => {
    console.log(`category setted to ${e}`)
  }

  const handleCategoriesRemove = (category) => {
    console.log(`removed the category ${category}`)
    dispatch(removeItem(category));
  }

  const handleCategoriesAdd = (e) => {
    console.log(`added ${e}`);
    dispatch(addItem(e));
  }

  const renderedCategories = categories.map((category , index) => {
    return (
      <div key={categories[index]} className="flex gap-2">
        <div onClick={() => handleCategoriesSet(category)}>{category}</div>
        <button onClick={() => handleCategoriesRemove(category)}>-</button>
      </div>
    );
  });

  return (
    <div className='h-20 align-center flex gap-4 items-center justify-items-center'>
      {renderedCategories}
      <button onClick={() => handleCategoriesAdd('item')}>+</button>
    </div>
  )
}

export default Categories