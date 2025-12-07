
const teamMembers = ['Nafis', 'Mahmudul', 'Noman'];

let nafisScore = 0;
let mahmudulScore = 0;
let nomanScore = 0;

const Nafis = {
  id: Symbol('Nafis'),
  name: 'Nafis',
  age: 23,
  isActive: true,
  bugs: ['UI Bug', 'API Bug', 'Login Bug'],



  bugCount: 3
};

const Mahmudul = {
  id: Symbol('Mahmudul'),
  name: 'Mahmudul',
  age: 21,
  isActive: true,
  bugs: ['UI Bug'],
  bugCount: 1
};

const Shuvo = {
  id: Symbol('Shuvo'),
  name: 'Shuvo',
  age: 25,
  isActive: true,
  bugs: ['UI Bug', 'API Bug', 'Logic Bug', 'DB Bug', 'Crash Bug', 'Auth Bug'],
  bugCount: 6
};

function calculateGrade(bugCount) {
  if (bugCount > 5) {
    return '⭐ Bug Star';
  } else if (bugCount >= 3) {
    return '✅ Active Hunter';
  } else {
    return '🔍 Needs Improvement';
  }
}


const totalBugs = (user) => user.bugs.length;

const users = [Nafis, Mahmudul, Shuvo];

for (const user of users) {
  console.log(`\n👤 Name: ${user.name} (Age: ${user.age})`);
  console.log(`📌 Bugs Found: ${user.bugs.join(', ')}`);

  user.bugCount = totalBugs(user);
  console.log(`🎯 Grade: ${calculateGrade(user.bugCount)}`);
}

Nafis.bugs.push('Navbar Bug');

Mahmudul.bugs.pop();

const today = new Date();
const formattedDate = today.toLocaleDateString('en-GB', {
  day: '2-digit',
  month: 'long',
  year: 'numeric'
});
console.log(`\nToday is: ${formattedDate}`);

const scoreMap = new Map();
scoreMap.set('Nafis', totalBugs(Nafis));
scoreMap.set('Meem', totalBugs(Mahmudul));
scoreMap.set('Shuvo', totalBugs(Shuvo));

console.log('\n📊 Bug Scoreboard:');
for (let [name, score] of scoreMap) {
  console.log(`${name} → ${score} bugs`);
}
