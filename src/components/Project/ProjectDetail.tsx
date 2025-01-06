import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  fetchProject,
  portfolioSelector,
} from "../../redux/reducers/portfolioReducer";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import CodeSnippet from "../CodeSnippet";

export const ProjectDetail = () => {
  const projectId = useParams();
  const { project } = useSelector(portfolioSelector);
  type AppDispatch = ThunkDispatch<any, any, AnyAction>;
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    if (projectId) dispatch(fetchProject(projectId));
  }, [projectId]);
  console.log(project);
  return (
    <>
      <div className="project-details" style={{ display: "flex" }}>
        <Container className="col-md-5">
          <Link to={project.url}>
            <img src={project.image} style={{ width: "95%" }} />
          </Link>
        </Container>
        <Container className="col-md-6">
          <Link to={project.url}>
            <h1 className="text-center">{project.title}</h1>
          </Link>
          <p>{project.description}</p>
          <h2>Key Features:</h2>
          <ul>
            {project.keyfeatures &&
              project.keyfeatures.map((feature: any, index: number) => (
                <li key={index}>
                  <strong>{feature.key}</strong> {feature.value}
                </li>
              ))}
          </ul>
        </Container>
      </div>
      <Container>
        <h2 className="text-center">Variables and Elaboration</h2>
        {project.VariablesAndElaborations &&
          project.VariablesAndElaborations.map((entity: any, index: number) => (
            <div key={index}>
              <CodeSnippet title={entity.title} data={entity.desc} />
              <p>
                <b>Explanation</b> : {entity.Explanation}
              </p>
            </div>
          ))}
          <div>...</div>
      </Container>
    </>
  );
};
