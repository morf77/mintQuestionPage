import classes from "./Cart.module.css"
import React, { useContext, useState } from 'react';
import { Fragment } from "react";
import Modal from "../UI/Modal"
import {CenteralContext} from "../../CentralContext/CentralContext";

const Cart=props=>{
    const ctx = useContext(CenteralContext)

    return <Modal>
        <h1>Congradulation, You are in stage {Math.floor((ctx.lastQuestion+1)/5)}</h1>
        <h1>Your Score Is {ctx.score}</h1>
    </Modal>

}

export default Cart;