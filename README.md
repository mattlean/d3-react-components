# D3 React Components

This is a [React](https://reactjs.org) component library that offers SVG and [D3](https://d3js.org)-based charts and parts used for building data visualizations.

## Motivation

The impetus to this project was [Amelia Wattenberger's React + D3.js article](https://wattenberger.com/blog/react-and-d3). While there are many ways to get the two libraries to work together, Wattenberger's approach prioritizes React's paradigm to embrace its declarative and predictable nature while taking advantage of the under-the-hood performance optimizations it offers.

The trade-off is that some D3 modules, like the [`axis` module](https://github.com/d3/d3-axis), conflict with this approach because they require D3 to manipulate the DOM. This means that to keep things clean and consistent, you must recreate what those potentially problematic modules offer in React.

This component library does some of that recreation work for you. So for example, the [`axis` module](https://github.com/d3/d3-axis) falls into this case, so you can use this library's `Axis` component instead.

This component library also offers parts of data visualizations that are common but are not offered by D3 such as the `Legend` component.

If you just need to quickly draw some simple charts, the component library also offers `BarChart`, `LineChart`, `PieChart`, and `ScatterPlot` components.
