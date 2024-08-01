window.onload = () => {
  const featuredProjectList = featuredProjects.map((project) => {
    return `
            <div class="bg-slate-100 p-3 rounded shadow-lg">
                <div class="">
                    <img src=${project.thumbnail} alt="hamburger food" class="w-full h-full">
                </div>
                <div class="flex justify-center items-center mt-3">
                    <h1 class="text-slate-800 text-sm md:text-lg font-semibold">${project.name}</h1>
                </div>
            </div>
        `;
  });

  document.getElementById("featured-projects").innerHTML =
    featuredProjectList.join("");
  const totalProjectList = totalProjects.map((project) => {
    return `
            <div class="bg-slate-100 p-3 rounded shadow-lg">
                <div class="">
                    <img src=${project.thumbnail} alt="hamburger food" class="w-full h-full">
                </div>
                <div class="flex justify-center items-center mt-3">
                    <h1 class="text-slate-800 text-sm md:text-lg font-semibold">${project.name}</h1>
                </div>
            </div>
    `;
  });

  document.getElementById("total-projects").innerHTML =
    totalProjectList.join("");

  setTimeout(() => {
    document.getElementById("preloader").style.display = "none";
  }, 2000);
};
