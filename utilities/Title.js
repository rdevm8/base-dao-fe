// src/shared/Button.js
import React from "react"
import { classNames } from "./Utils"

export function TitleHeader({ children, className, ...rest }) {
    return (
        <h1 className={classNames("text-4xl font-bold text-content", className)} {...rest}>
            {children.toString().toUpperCase()}
        </h1>
    )
}
