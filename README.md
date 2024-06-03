# Angular Chart.js application

## Prerequisites
- Node.js
- npm (installed automatically with node)
- Angular CLI
- Git

## Getting Started
1. Clone the repository using `git clone`
2. Install dependencies using `npm install`
3. Run the application using `ng serve`

## Project Structure
The project consists of a main application component and 2 custom chart components. Both the radar and the doughnut chart components use Chart.js to create a radar chart displaying the performance of 2 players, and a doughnut chart displaying the market share of 10 different car brands.

### Chart components
Both chart components have a defined HTML file used for rendering the charts. We have defined a single `div` that encapsulates a `canvas`. The chart is automatically rendered inside the `canvas` component.
The CSS file was used to center both chart containers.
The Typescript files was used to configure both charts. We can define aspects such as:
- `type` -> type of chart
- `data` -> data to be displayed in the chart (here we can configure different attributes such as `labels` and `datasets`)
- `options` -> edit different general options of the chart

Both custom components are added as HTML tags inside `app.component.html` in order to be rendered on the main page.
