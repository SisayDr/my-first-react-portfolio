function ProjectCard(props) {
  return (
    <div className="max-w-sm m-2 shadow-lg rounded-md min-h-64 w-80 bg-red-400 cursor-pointer">
      <img
        className="hover:scale-125 hover:-translate-y-5 h-3/4 object-cover w-full"
        src={props.image}
        alt=""
      />
      <div>
        <p className="text-center text-white text-md h1/4 p-5 z-10">
          {props.title}
        </p>
      </div>
    </div>
  );
}

export default ProjectCard;
