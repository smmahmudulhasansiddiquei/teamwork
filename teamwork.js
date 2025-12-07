
const teamMembers = ['Rafi', 'Meem', 'Shuvo'];

let rafiScore = 0;
let meemScore = 0;
let shuvoScore = 0;

const Rafi = {
  id: Symbol('Rafi'),
  name: 'Rafi',
  age: 23,
  isActive: true,
  bugs: ['UI Bug', 'API Bug', 'Login Bug'],



  bugCount: 3
};

const Meem = {
  id: Symbol('Meem'),
  name: 'Meem',
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

const users = [Rafi, Meem, Shuvo];

for (const user of users) {
  console.log(`\n👤 Name: ${user.name} (Age: ${user.age})`);

  console.log(`📌 Bugs Found: ${user.bugs.join(', ')}`);

  // bugCount update
  user.bugCount = totalBugs(user);

  // Grade দেখানো
  console.log(`🎯 Grade: ${calculateGrade(user.bugCount)}`);
}
// নতুন bug যোগ করলাম Rafi-এর জন্য
Rafi.bugs.push('Navbar Bug');

// একটা bug fix হয়ে গেছে, pop দিয়ে সরালাম Meem-এর bug list থেকে
Meem.bugs.pop();
