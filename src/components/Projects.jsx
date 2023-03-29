import ProjectCard from "./ProjectCard";
import huDormitory from "../assets/images/hu-dormitory.jpg";
import weddingInvitaiton from "../assets/images/wedding-invitation.jpg";
import productListPage from "../assets/images/product-list-page.jpg";
function Projects() {
  return (
    <>
      <h1
        id="projects"
        className="text-center italic text-3xl p-5 md:p-16 md:text-5xl text-indigo-500 font-bold font-mono underline"
      >
        &emsp;Projects&emsp;
      </h1>
      <div className="max-w-7xl m-auto flex justify-around flex-wrap p-4">
        <ProjectCard
          image={huDormitory}
          title="Dormitory Managemnt System for Haramaya University"
        />
        <ProjectCard
          image={weddingInvitaiton}
          title="A wedding invitaion Website for Betty & Fasi"
        />
        <ProjectCard
          image={productListPage}
          title="Product listing page for a Dutch company"
        />
      </div>
    </>
  );
}

export default Projects;
