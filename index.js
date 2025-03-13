
        const skills = [
            { name: "KAFKA", rating: 5 },
            { name: "PYSPARK", rating: 5 },
            { name: "HADOOP", rating: 5 },
            { name: "HIVE", rating: 5 },
            { name: "AWS", rating: 5 },
            { name: "System Design", rating: 5 },
            { name: "DSA", rating: 5 },
            { name: "INFORMATICA POWER CENTRE", rating: 5 },
            { name: "MONGODB", rating: 5 }
        ];
        
        const projects = [
            { name: "Job Portal", description: "A Django-based application for job seekers and recruiters." },
            { name: "Event Management API", description: "A REST API for managing events, built using Django." },
            { name: "Portfolio Website", description: "A modern and responsive portfolio showcasing my skills and projects." }
        ];
        
        const skillsContainer = document.getElementById("skills");
        skills.forEach(skill => {
            let div = document.createElement("div");
            div.className = "skill";
            div.innerHTML = <strong>${skill.name}</strong><br>⭐️⭐️⭐️⭐️⭐️;
            skillsContainer.appendChild(div);
        });
        
        const projectsContainer = document.getElementById("projects");
        projects.forEach(project => {
            let div = document.createElement("div");
            div.className = "project";
            div.innerHTML = <h3>${project.name}</h3><p>${project.description}</p>;
            projectsContainer.appendChild(div);
        });
