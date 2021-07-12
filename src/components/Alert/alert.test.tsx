import React  from "react";
import { render, fireEvent } from "@testing-library/react";
import Alert from './alert';

describe('alert',()=>{
    const alertDom = render(<Alert>alert</Alert>);
    const element = alertDom.getByText('alert');
    expect(element).toBeInTheDocument();
})