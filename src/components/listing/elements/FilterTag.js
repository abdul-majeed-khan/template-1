import { agencies, bath, bed, clearFilter, maxRooms, propertyStatus, propertyType, sortBy } from "@/redux-toolkit/reducers/inputsReducer";
import { Fragment } from "react";
import { X } from "react-feather";
import { useDispatch, useSelector } from "react-redux";

const FilterTag = () => {
  const filterTag = useSelector((state) => state.inputsReducer);
  const dispatch = useDispatch();

  const clearFilterhandle = (filterType) => {
    dispatch(clearFilter(filterType));
  };
   

  const StringConvert = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  return (
    <div className='filter-tag-div'>
      {filterTag &&
        Object.keys(filterTag).map((data, i) => (
          <Fragment key={i}>
            {filterTag[data] &&
              (!Array.isArray(filterTag[data]) ? (
                StringConvert(data).trim() !== filterTag[data] && (
                  <div className='filter-tag'>
                    {StringConvert(data)} : {filterTag[data]} <X onClick={() => clearFilterhandle(data)} />
                  </div>
                )
              ) : (
                <div className='filter-tag'>
                  {StringConvert(data)} : {filterTag[data][0] + "-" + filterTag[data][1]} <span onClick={() => dispatch({ type: data, dispatch: [] })}></span>
                </div>
              ))}
          </Fragment>
        ))}
    </div>
  );
};

export default FilterTag;
