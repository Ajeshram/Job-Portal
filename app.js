// Sample API fetch (replace with your actual API endpoint)
document.addEventListener('DOMContentLoaded', () => {
  // Fetch jobs from API
  fetch('https://your-api-url.com/jobs')
    .then(response => response.json())
    .then(jobs => {
      const jobGrid = document.querySelector('.job-grid');
      jobGrid.innerHTML = ''; // Clear loading content
      
      jobs.forEach(job => {
        jobGrid.innerHTML += `
          <div class="job-card">
            <h3>${job.title}</h3>
            <p class="company">${job.company}</p>
            <p class="location">${job.location}</p>
            <p class="salary">$${job.salary}</p>
            <a href="#" class="btn apply-btn">Apply Now</a>
          </div>
        `;
      });
    })
    .catch(error => {
      console.error('Error fetching jobs:', error);
    });
});
