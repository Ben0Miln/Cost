
document.getElementById("calcForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const employeeCount = Number(document.getElementById("employeeCount").value);
  const sessionCount = Number(document.getElementById("sessionCount").value);
  const premiumMarkup = Number(document.getElementById("premiumMarkup").value);
  const profitCost = Number(document.getElementById("profitCost").value);

  const gpSessionCost = 49.99;
  const psychSessionCost = 220;
  const gpRatio = 0.75;
  const psychRatio = 0.25;
  const hotlineCost = 3600;

  const gpSessions = sessionCount * gpRatio;
  const psychSessions = sessionCount * psychRatio;

  const basicTotal = (gpSessions * gpSessionCost) + (psychSessions * psychSessionCost) + profitCost;
  const basicMonthly = basicTotal / 12 / employeeCount;

  const standardTotal = basicTotal + hotlineCost;
  const standardMonthly = standardTotal / 12 / employeeCount;

  const premiumTotal = standardTotal * (1 + premiumMarkup / 100);
  const premiumMonthly = premiumTotal / 12 / employeeCount;

  document.getElementById("results").innerHTML = `
    <p><strong>Basic Plan:</strong> $${basicMonthly.toFixed(2)} per employee/month</p>
    <p><strong>Standard Plan:</strong> $${standardMonthly.toFixed(2)} per employee/month</p>
    <p><strong>Premium Plan:</strong> $${premiumMonthly.toFixed(2)} per employee/month</p>
  `;
});
