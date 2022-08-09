// src/shared/Button.js
import React from "react"
import { classNames } from "./Utils"

export function TitleHeader({ children, className, ...rest }) {
    return (
        <div className={classNames(" text-xl font-bold text-content pb-4", className)} {...rest}>
            {children.toString().toUpperCase()}
        </div>
    )
}
