// Data Set 1
const salesData = [

    { name: 'Alice', sales: [12000, 15000, 13000] },
    
    { name: 'Bob', sales: [7000, 6000, 7500] },
    
    { name: 'Charlie', sales: [3000, 4000, 3500] },
    
    { name: 'Diana', sales: [9000, 8500, 9200] },
    
    ];

// Task 1: Create a Function to Calculate Average Sales

function calculateAverageSales(sales)
{
    let averageSales = 0;
    salesData.forEach(sales => (totalSales += salesData.sales));
    averageSales = (totalSales/sales.length);
}

//Task 2: Create a Function to Determine Performance Rating
function determinePerformanceRating(averageSales)
{
    if (averageSales > 10000)
    {
        return "Excellent";
    }
    else if (averageSales >= 7000)
    {
        return "Good";
    }
    else if (averageSales >= 4000)
    {
        return "Satisfactory";
    }
    else if (averageSales < 4000)
    {
        return "Needs Ipmrovement";
    }
}

