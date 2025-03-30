import { Box, Typography } from "@/components/atoms";
import { MyProjectCard } from "./MyProjectCard";
import ContributedProjectsCard from "./ProjectCard";
import ProjectsCardsContainer from "./ProjectsCardsContainer";
import { contributedProjects } from "./contributedProjects";
import { myProjects } from "./myProjects";

export default function Projects() {
  return (
    <Box>
      <ProjectsCardsContainer label="My Projects">
        {myProjects.length > 0 ? (
          myProjects.map((project) => (
            <MyProjectCard
              key={project.name}
              name={project.name}
              description={project.description}
              repositoryLink={project.repositoryLink}
              haveCooperated={project.haveCooperated}
            />
          ))
        ) : (
          <Typography>無し</Typography>
        )}
      </ProjectsCardsContainer>
      <ProjectsCardsContainer label="Contributed Projects">
        {contributedProjects.length > 0 ? (
          contributedProjects.map((project) => (
            <ContributedProjectsCard
              key={project.name}
              name={project.name}
              description={project.description}
              repositoryLink={project.repositoryLink}
            />
          ))
        ) : (
          <Typography>無し</Typography>
        )}
      </ProjectsCardsContainer>
    </Box>
  );
}
