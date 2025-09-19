
// Chart data for company growth (dummy)
document.addEventListener('DOMContentLoaded', function(){
  const ctx = document.getElementById('growthChart')?.getContext('2d');
  if(ctx){
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['2018','2019','2020','2021','2022','2023','2024'],
        datasets: [
          { label: 'Reliance Retail (est.)', data: [900,1100,1400,1700,2000,2250,2450], borderColor:'#0b66c3', tension:0.3, fill:false },
          { label: 'Tata Technologies (est.)', data: [3000,3400,4100,5200,6300,7600,8900], borderColor:'#00a3d2', tension:0.3, fill:false },
          { label: 'NSE (est.)', data: [1800,2000,2300,2700,3100,3800,4500], borderColor:'#ff7a00', tension:0.3, fill:false }
        ]
      },
      options: { responsive:true, plugins:{legend:{position:'top'}}}
    });
  }
});
