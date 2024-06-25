import React from "react";
import { Range, getTrackBackground } from "react-range";
import { useDispatch, useSelector } from "react-redux";
import { Col, FormGroup, Label } from "reactstrap";
import { setPrice, setArea } from "@/redux-toolkit/reducers/inputsReducer";  

const RangeInputFields = ({ label, min, max, sm, lg }) => {
  const { symbol, currencyValue } = useSelector((state) => state.currencyReducer);
  const { price, area } = useSelector((state) => state.inputsReducer);
  const dispatch = useDispatch();

  // Step value
  const STEP = 1;

  return (
    <Col lg={lg || 12} sm={sm || 12}>
      <FormGroup>
        <div className='price-range'>
          <Label>
            {label} : {label === "Price" && `AED`} {(label === "Area" ? area[0] : price[0] * currencyValue).toFixed(2)} - {label === "Price" && `AED`} {(label === "Area" ? area[1] : price[1] * currencyValue).toFixed(2)} {label === "Area" && "sq ft"}
          </Label>
          <div className='theme-range-3' id={label === "Price" ? "slider-1" : "slider-2"}>
            <Range
              values={label === "Price" ? price : area}
              step={STEP}
              min={min || 1000}
              max={max || 10000}
              onChange={(values) => {
                if (label === "Price") {
                  dispatch(setPrice(values));
                } else if (label === "Area") {
                  dispatch(setArea(values));
                }
              }}
              renderTrack={({ props, children }) => (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    height: "5px",
                    width: "100%",
                    borderRadius: "4px",
                    background: getTrackBackground({
                      values: label === "Price" ? price : area,
                      colors: ["#ccc", "var(--theme-default2)", "#ccc"],
                      min: min || 1000,
                      max: max || 10000,
                    }),
                    alignSelf: "center",
                  }}
                >
                  {children}
                </div>
              )}
              renderThumb={({ props }) => {
                const { key, ...restProps } = props;
                const prop = { ...restProps };
                return (
                  <div key={key} {...prop}>
                    <div
                      style={{
                        height: "16px",
                        width: "8px",
                        borderRadius: "30%",
                        backgroundColor: "var(--theme-default2)",
                      }}
                    />
                  </div>
                );
              }}
            />
          </div>
        </div>
      </FormGroup>
    </Col>
  );
};

export default RangeInputFields;
