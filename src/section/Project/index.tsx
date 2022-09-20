import { useContext } from 'react';
import Carrusel from '../../components/Carrusel';
import CarruselProjectBody from '../../components/CarruselProjectBody';
import ModalProjectBody from '../../components/ModalProjectBody';
import SectionCointainer from '../../components/SectionCointainer';
import ModalContext from '../../context/Modal/ModalContext';
import { ProjectItem } from '../../models/data';
import ProjectProps, { defaultProjectProps } from './props';
import projectContainerStyle from './style';

const Project = (props:ProjectProps) => {
  const {
    id,
    projectTitle,
    technologyLabel,
    repositoryLabel,
    projects,
    labelShowMore,
    widthScreen,
  } = props;
  const { openModal } = useContext(ModalContext);
  const renderContent = (project:ProjectItem) => (
    <ModalProjectBody
      project={project.title}
      description={project.description}
      technologyLabel={technologyLabel}
      repositoryLabel={repositoryLabel}
      technologies={project.technologies}
      urlGithub={project.urlGithub}
    />
  );
  const renderProjects = projects.map(
    (project) => (
      <CarruselProjectBody
        key={project.id}
        titleProject={project.title}
        labelShowMore={labelShowMore}
        logo={project.logo}
        onClickShowMore={() => openModal(renderContent(project))}
      />
    ),
  );
  return (
    <SectionCointainer
      id={id}
      title={projectTitle}
    >
      <div className={projectContainerStyle}>
        <Carrusel widthScreen={widthScreen} itemsContent={renderProjects} />
      </div>
    </SectionCointainer>
  );
};

Project.defaultProps = defaultProjectProps;

export default Project;
