"use strict";

// 1. create submission variable and array of objects
// make sure to know what data type youre using. name = "string" score = number date = "string" passed = boolean
let submissions = [
  {
    name: "Jane",
    score: 95,
    date: "2020-01-24",
    passed: true,
  },
  {
    name: "Joe",
    score: 77,
    date: "2018-05-14",
    passed: true,
  },
  {
    name: "Jack",
    score: 59,
    date: "2019-07-05",
    passed: false,
  },
  {
    name: "Jill",
    score: 88,
    date: "2020-04-22",
    passed: true,
  },
];

// submissions[0] = "Al";
// this would change Jane to Al

// 2. delcare a function named addSubmission
const addSubmission = (array, newName, newScore, newDate) => {
  let newSubmission = {
    name: newName,
    score: newScore,
    date: newDate,
    passed: newScore >= 60,
  };
  array.push(newSubmission);
};
addSubmission(submissions, "Alex", 10, "2020-7-28");
// test if it worked by logging submissions
// console.log(submissions);

// 3. delete by Index
const deleteSubmissionByIndex = (array, index) => {
  array.splice(index, 1);
};

// 4. deleteSubmissionByName
const deleteSubmissionByName = (array, name) => {
  let index = array.findIndex((student) => {
    return student.name === name;
  });
  array.splice(index, 1);
};
// deleteSubmissionByName(submissions, "Alex");
// console.log(submissions);

// 5. editSubmission
const editSubmission = (array, index, score) => {
  array[index].score = score;
  array[index].passed = score >= 60;
};
// editSubmission(submissions, 4, 100);
// console.log(submissions);

// 6. findSubmissionByName
const findSubmissionByName = (array, name) => {
  let found = array.find((submission) => {
    return submission.name === name;
  });
  return found;
};
// console.log(findSubmissionByName(submissions, "Joe"));

// 7. findLowestScore

const findLowestScore = (array) => {
  let lowestScore = array[0];
  array.forEach((student) => {
    if (student.score < lowestScore.score) {
      lowestScore = student;
    }
  });
  return lowestScore;
};
// findLowestScore(submissions);
// console.log(findLowestScore(submissions));

// 8. findAverageScore

const findAverageScore = (array) => {
  let sum = 0;
  for (let submission of array) {
    sum += submission.score;
  }
  let average = sum / array.length;
  return average;
};
console.log(findAverageScore(submissions));

// 9. filterPassing
const filterPassing = (array) => {
  let passing = array.filter((score) => {
    return score.passed === true;
  });
  return passing;
};
console.log(filterPassing(submissions));

// 10. filter90AndAbove
const filter90AndAbove = (array) => {
  let scoresGreaterThan90 = array.filter((scores) => {
    return scores.score >= 90;
  });
  return scoresGreaterThan90;
};
console.log(filter90AndAbove(submissions));
