// ##############################
// // // Function that converts a hex color number to a RGB color number
// #############################
// 

// ##############################
// // // general variables for charts
// #############################

const chartColor = "#FFFFFF";

// General configuration for the charts with Line gradientStroke
const gradientChartOptionsConfiguration = {
  maintainAspectRatio: false,
 
 
  responsive: 1,
  scales: {
   
    
  },
  layout: {
    padding: { left: 0, right: 0, top: 15, bottom: 15 }
  }
};

var gradientChartOptionsConfigurationWithNumbersAndGrid = {
  maintainAspectRatio: false,
  // legend: {
  //   display: false
  // },
 
  responsive: 1,
  
  
};

// ##############################
// // // Dashboard view - Panel chart
// #############################

const dashboardPanelChart = {
  // options: {
  //   layout: {
  //     padding: {
  //       left: 20,
  //       right: 20,
  //       top: 0,
  //       bottom: 0
  //     }
  //   },
    
    
   
    
  // }
};

// ##############################
// // // Dashboard view - Shipped Products - Card
// #############################

const dashboardShippedProductsChart = {
  
  options: gradientChartOptionsConfiguration
};

// ##############################
// // // Dashboard view - All Products - Card
// #############################

const dashboardAllProductsChart = {
 
  options: gradientChartOptionsConfigurationWithNumbersAndGrid
};

// ##############################
// // // Dashboard view - Bar Chart - Card
// #############################

const dashboard24HoursPerformanceChart = {
 
  // options: {
  //   maintainAspectRatio: false,
  
  //   responsive: 1,
  //   scales: {
  //     yAxes: [
        
  //     ],
     
  //   },
  //   layout: {
  //     padding: { left: 0, right: 0, top: 15, bottom: 15 }
  //   }
  // }
};

module.exports = {
  dashboardPanelChart, // Chart for Dashboard view - Will be rendered in panel
  dashboardShippedProductsChart, // Chart for Dashboard view - Shipped Products Card
  dashboardAllProductsChart, // Chart for Dashboard view - All products Card
  dashboard24HoursPerformanceChart // Chart for Dashboard view - 24 Hours Performance Card
};
