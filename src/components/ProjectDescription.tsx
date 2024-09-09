export const ProjectDescription = (props) => {
  return (
    <div className="project_description_container">
      <div className="project_description_container_images">
        {props.image1 ? <img src={props.image1}></img> : null}
        {props.image2 ? <img src={props.image2}></img> : null}
        {props.image3 ? <img src={props.image3}></img> : null}
        {props.image4 ? <img src={props.image4}></img> : null}
      </div>
      <div className="project_description_text_container _word-wrap--break-word">
        {props.clientName && (
          <div className="_margin-bottom--1rem">
            <h2>{props.jobTitle}</h2>
            <h3>{props.clientName}</h3>
            <span>{props.startDateYear + " - " + props.endDateYear}</span>
          </div>
        )}
        <div dangerouslySetInnerHTML={{ __html: props.description }}></div>

        <div className="back-button" onClick={props.clickHandler}>
          <i className="fa-solid fa-chevron-left"></i>
          <i className="fa-solid fa-chevron-left"></i>
        </div>
      </div>
    </div>
  );
};
