const breakpoints = [768, 992, 1200]

const theme = {
    mainColor: "#fff",
    subColor: "#000",
    mobile: `@media (min-width: ${breakpoints[0]}px)`,
    tablet: `@media (min-width: ${breakpoints[1]}px)`,
    pc: `@media (min-width: ${breakpoints[2]}px)`
}

export default theme;