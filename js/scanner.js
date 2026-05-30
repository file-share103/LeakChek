
let chart;
function scanLeak(){
 const risk=Math.floor(Math.random()*100);
 const breaches=Math.floor(Math.random()*15)+1;
 const records=(Math.floor(Math.random()*900000)+10000).toLocaleString();

 document.getElementById('results').innerHTML=`
 <h3>Scan Results</h3>
 <p><b>Risk Score:</b> ${risk}%</p>
 <p><b>Breaches Found:</b> ${breaches}</p>
 <p><b>Compromised Records:</b> ${records}</p>
 <p><b>Status:</b> Demo Data</p>`;

 const ctx=document.getElementById('riskChart');
 if(chart) chart.destroy();
 chart=new Chart(ctx,{type:'doughnut',
 data:{labels:['Risk','Safe'],datasets:[{data:[risk,100-risk]}]}});

 window.lastReport={risk,breaches,records};
}

function downloadPDF(){
 const {jsPDF}=window.jspdf;
 const doc=new jsPDF();
 doc.setFontSize(22);
 doc.text('LeakGuard Pro Report',20,20);
 if(window.lastReport){
   doc.text('Risk Score: '+window.lastReport.risk+'%',20,40);
   doc.text('Breaches Found: '+window.lastReport.breaches,20,55);
   doc.text('Records: '+window.lastReport.records,20,70);
 }
 doc.text('Demo Hackathon Project',20,90);
 doc.save('LeakGuard_Report.pdf');
}
