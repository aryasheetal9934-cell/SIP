const activities = [
  { user: "A", action: "login" },
  { user: "B", action: "logout" },
  { user: "C", action: "login" }
];

// Count login actions
const loginCount = activities.filter(
  activity => activity.action === "login"
).length;

console.log(loginCount);