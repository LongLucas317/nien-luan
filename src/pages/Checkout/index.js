import classNames from "classnames/bind";
import styles from "./Checkout.module.scss";

import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { Fragment } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

import AddInforForm from "./AddInforForm";
import OrderSummary from "./OrderSummary";

const cx = classNames.bind(styles);

const steps = ["Đặt hàng", "Thêm thông tin", "Đơn hàng", "Thanh toán"];

function Checkout() {
  const [activeStep, setActiveStep] = useState(0);
  const location = useLocation();
  const querySearch = new URLSearchParams(location.search);

  const step = querySearch.get("step");

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  return (
    <div className={cx("checkout__section")}>
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={step}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
          </Fragment>
        ) : (
          <Fragment>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
            </Box>

            <div>{step == 2 ? <AddInforForm /> : <OrderSummary />}</div>
          </Fragment>
        )}
      </Box>
    </div>
  );
}

export default Checkout;
