import { Button, Grid, Paper } from "@mui/material";
import React from "react";

export default function LoginAndRegister() {
  return (
    <div>
      <Paper className="login-wrapper">
        <p className="login-title typography-bold">ورود به حساب کاربری</p>
        <Grid container justifyContent="flex-start" mt={0} spacing={1}>
          <Grid item xs={12}>
            <div className="login-text typography-regular">شماره تماس:</div>
          </Grid>
          <Grid item xs={12}>
            <div className="login-input-container">
              <input className="login-input" type="text" />
            </div>
          </Grid>
        </Grid>
        <Grid container justifyContent="flex-start" mt={0} spacing={1}>
          <Grid item xs={12}>
            <div className="login-text typography-regular">شماره تماس:</div>
          </Grid>
          <Grid item xs={12}>
            <div className="login-input-container">
              <input className="login-input" type="text" />
            </div>
          </Grid>
        </Grid>
        <Grid container justifyContent="" mt={0} spacing={1}>
          <Grid item xs={6}>
            <Button>انصراف</Button>
          </Grid>
          <Grid item xs={6}>
            <Button>انصراف</Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
