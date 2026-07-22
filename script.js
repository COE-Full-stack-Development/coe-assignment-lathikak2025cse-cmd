
document.getElementById("toggle-theme-btn").onclick = function () {
    document.getElementById("profile-card").classList.toggle("dark-theme");
};


document.getElementById("add-skill-btn").onclick = function () {

    let skill = document.getElementById("skill-input").value;

    if (skill.trim() != "") {

        let newSkill = document.createElement("li");

        newSkill.innerHTML = skill;

        document.getElementById("skills-list").appendChild(newSkill);

        document.getElementById("skill-input").value = "";
    }

};
