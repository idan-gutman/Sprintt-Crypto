import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch } from "react-redux"

export const About = () => {
    const dispatch = useDispatch()

    return (
        <section className="main-container ">
            <h1>About</h1>
        </section>
    )
}