import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import { InputForm } from "@/data/inputForm";
import { setPrice, setArea, propertyStatus, propertyType, maxRooms, bed, bath, agencies, sortBy } from "@/redux-toolkit/reducers/inputsReducer";

const DropdownInputFields = ({ label, filterValues, setFilterValues, lg, sm, start, end, lastSm }) => {
  const dispatch = useDispatch();
  const inputFilter = useSelector((state) => state.inputsReducer);

  const [dropdownOpen, setDropdownOpen] = useState({});

  const toggleDropdown = (name) => {
    setDropdownOpen({ ...dropdownOpen, [name]: !dropdownOpen[name] });
  };

  const handleOptionSelect = (value, option) => {
    setDropdownOpen({ ...dropdownOpen, [value]: false });
    setFilterValues({ ...filterValues, [value]: option });

    const actionCreator = {
      price: setPrice,
      area: setArea,
      propertyStatus,
      propertyType,
      maxRooms,
      bed,
      bath,
      agencies,
      sortBy,
    }[value];

    if (actionCreator) {
      dispatch(actionCreator(option));
    }
  };

  return (
    <Fragment>
      {InputForm.slice(start || 0, end || InputForm.length).map((value, i) => (
        <Col lg={lg || value.size} sm={sm ? sm : lastSm && i > 1 ? lastSm : ""} key={i}>
          <div className='form-group'>
            {label && <label>{value.label}</label>}
            <Dropdown isOpen={dropdownOpen[value.name]} toggle={() => toggleDropdown(value.name)}>
              <DropdownToggle className='font-rubik' caret>
                {inputFilter[value.name] || value.label}
                <i className='fas fa-angle-down'></i>
              </DropdownToggle>
              <DropdownMenu>
                {value.options.map((option, j) => (
                  <DropdownItem key={j} onClick={() => handleOptionSelect(value.name, option)}>
                    {option}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          </div>
        </Col>
      ))}
    </Fragment>
  );
};

export { DropdownInputFields };
