const user = {
  name: 'Alex',
  job: 2
};

const jobs = [
  { id: 1, title: 'Lawyer' },
  { id: 2, title: 'Web developer' }
];

const data = JSON.stringify(user, (key, val) => {
  if (key === 'job') {
    const job = jobs.find(({ id }) => id === val);
    return job ? job.title : '';
  }

  return val;
});

console.log(data);

// What will be the output?

