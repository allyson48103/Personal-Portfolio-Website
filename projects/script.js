function getProjects() {
    return fetch("projects.json")
        .then(response => response.json())
        .then(data => {
            return data;
        });
}

function showProjects(projects) {
    let projectsContainer = document.querySelector(".work .box-container");
    let projectsHTML = "";
    projects.forEach(project => {
        console.log("Processing project:", project.name, "Code Link:", project.links.code); // Debugging Log
        projectsHTML += `
        <div class="grid-item ${project.category}">
        <div class="box tilt" style="width: 380px; margin: 1rem">
          <img draggable="false" src="assets/images/projects/${project.image}.png" alt="project" />
          <div class="content">
            <div class="tag">
              <h3>${project.name}</h3>
            </div>
            <div class="desc">
              <p>${project.desc}</p>
              <div class="btns">
                <a href="${project.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
                ${
                    project.links.code && project.links.code !== "#" && project.links.code.trim() !== ""
                        ? `<a href="${project.links.code}" class="btn" target="_blank">Code <i class="fas fa-code"></i></a>`
                        : ""
                }
              </div>
            </div>
          </div>
        </div>
        </div>`;
    });
    projectsContainer.innerHTML = projectsHTML;
}


getProjects().then(data => {
    showProjects(data);
});
