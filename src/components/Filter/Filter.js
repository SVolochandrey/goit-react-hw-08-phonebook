import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/filter/selectors';
import { setFilter } from 'redux/filter/filterSlice';
import './Filter.module.css';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onFilterChange = e => {
    const data = e.target.value.trim();
    dispatch(setFilter(data));
  };

  return (
    <label htmlFor="filter">
      <input
        onChange={onFilterChange}
        type="text"
        name="filter"
        value={filter}
        placeholder="Find contacts by name"
      />
    </label>
  );
};

export default Filter;
